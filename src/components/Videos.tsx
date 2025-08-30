import styled from 'styled-components'

export interface Video {
  title: string
  subtitle: string
  description: string
  src: string
}

interface VideosProps {
  videos?: Video[]
}

const StyledVideos = styled.section`
  height: 100vh;
`

export default function Videos({ videos }: VideosProps) {
  if (!videos) return null

  return (
    <StyledVideos>
      <ol>
        {videos.map((video) => (
          <li key={video.title}>{video.title}</li>
        ))}
      </ol>
    </StyledVideos>
  )
}
