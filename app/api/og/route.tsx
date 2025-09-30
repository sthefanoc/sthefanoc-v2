import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Sthefano C.'
    const description =
      searchParams.get('description') || 'Full-Stack Developer & Designer'
    const emoji = searchParams.get('emoji') || '🚀'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 100%)',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 60px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '120px',
                marginBottom: '20px',
              }}
            >
              {emoji}
            </div>
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                margin: '0 0 20px 0',
                lineHeight: '1.1',
                textAlign: 'center',
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '32px',
                color: '#a1a1aa',
                margin: '0',
                textAlign: 'center',
                maxWidth: '800px',
                lineHeight: '1.4',
              }}
            >
              {description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '40px',
                padding: '20px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  color: '#ffffff',
                  fontWeight: '600',
                }}
              >
                sthefanoc.com
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
