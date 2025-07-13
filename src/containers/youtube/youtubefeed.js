import React, { useEffect, useState, useCallback, useContext } from "react";
import "./youtubefeed.scss";
import StyleContext from "../../contexts/StyleContext";

const YouTubeFeed = () => {
  const { isDark } = useContext(StyleContext);
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
  const pageSize  = 6;

  // *** Toggle this to true to use mock data instead of calling YouTube ***
  const mockTest = false;

  // Create 12 fake video entries
  const mockVideos = Array.from({ length: 12 }, (_, i) => ({
    snippet: {
      resourceId: { videoId: `mock${i}` },
      title: `Mock Video ${i + 1}`,
    },
  }));

  // Helper to fetch the uploads playlist ID (you can leave this untouched)
  const getUploadsPlaylistId = useCallback(async () => {
    const url =
      "https://www.googleapis.com/youtube/v3/channels?" +
      new URLSearchParams({
        part: "contentDetails",
        id: channelId,
        key: apiKey,
      });
    const data = await fetch(url).then((r) => r.json());
    return data.items[0].contentDetails.relatedPlaylists.uploads;
  }, [apiKey, channelId]);

  // Fetch one “page” of real videos
  const fetchPage = useCallback(
    async (playlistId, pageToken = "") => {
      setLoading(true);
      const url =
        "https://www.googleapis.com/youtube/v3/playlistItems?" +
        new URLSearchParams({
          part: "snippet",
          playlistId,
          maxResults: pageSize,
          pageToken,
          key: apiKey,
        });
      const data = await fetch(url).then((r) => r.json());
      setVideos((v) => [...v, ...data.items]);
      setNextPageToken(data.nextPageToken || "");
      setLoading(false);
    },
    [apiKey]
  );

  useEffect(() => {
  let cancelled = false;
  const pageSize = 6;
  const mockVideos = Array.from({ length: 12 }, (_, i) => ({
    snippet: {
      resourceId: { videoId: `mock${i}` },
      title: `Mock Video ${i + 1}`,
    },
  }));

  const loadMock = () => {
    setVideos(mockVideos.slice(0, pageSize));
    setNextPageToken("DUMMY_TOKEN");  // force the Load More button
    setLoading(false);
  };

  const loadReal = async () => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?` +
        new URLSearchParams({
          part: "contentDetails",
          id: channelId,
          key: apiKey,
        });
      const data = await fetch(url).then(r => r.json());
      const uploadsId = data.items[0].contentDetails.relatedPlaylists.uploads;

      let allItems = [];
      let nextToken = "";
      do {
        const listUrl = `https://www.googleapis.com/youtube/v3/playlistItems?` +
          new URLSearchParams({
            part: "snippet",
            playlistId: uploadsId,
            maxResults: pageSize,
            pageToken: nextToken,
            key: apiKey,
          });
        const page = await fetch(listUrl).then(r => r.json());
        allItems = allItems.concat(page.items);
        nextToken = page.nextPageToken || "";
      } while (false); // only first page for this example

      if (!cancelled) {
        setVideos(allItems);
        setNextPageToken(nextToken);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (!cancelled) setLoading(false);
    }
  };

  if (mockTest) {
    loadMock();
  } else {
    loadReal();
  }

  return () => { cancelled = true; };
}, [mockTest]);  // ← only re-run if mockTest flips


  return (
    <div className="youtube-feed" id="youtube" data-theme={isDark ? "dark" : "light"}>
      <h2 className="title">Recent Uploads</h2>
      <div className="video-grid">
        {videos.map((item) => {
          const vid = item.snippet.resourceId.videoId;
          const title = item.snippet.title;
          return (
            <div key={vid} className="video-card">
              <iframe
                className="video-iframe"
                src={`https://www.youtube.com/embed/${vid}`}
                title={title}
                allowFullScreen
              />
              <p className="youtube-title">{title}</p>
            </div>
          );
        })}
      </div>

      {nextPageToken ? (
        <div className="view-all">
          <button
            className="view-all-btn"
            onClick={async () => {
              if (mockTest) {
                // On mock “Load More” we append the rest of mockVideos
                setVideos((v) => [...v, ...mockVideos.slice(pageSize)]);
                setNextPageToken(""); // now no more pages
              } else {
                const uploadsId = await getUploadsPlaylistId();
                await fetchPage(uploadsId, nextPageToken);
              }
            }}
            disabled={loading}
          >
            {loading ? "Loading…" : "Load More Videos"}
          </button>
        </div>
      ) : (
        <div className="view-all">
          <a
            href="https://www.youtube.com/@techbykhezzy"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View All on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default YouTubeFeed;
