import yogaWasm from 'satori/yoga.wasm';
import resvgWasm from '@resvg/resvg-wasm/index_bg.wasm';
import { loadDefaultJapaneseParser } from 'budoux';
import satori, { init } from 'satori/standalone';
import { Resvg, initWasm } from '@resvg/resvg-wasm';

import mediumFontData from '@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-500-normal.woff';
import regularFontData from '@fontsource/noto-sans-jp/files/noto-sans-jp-japanese-400-normal.woff';
import avatar from '@assets/img/avatar.png?inline';

let initialized = false;
async function ensureInitialized() {
  if (initialized) return;
  await init(yogaWasm);
  await initWasm(resvgWasm);
  initialized = true;
}
const parser = loadDefaultJapaneseParser();

export const generateOgpImage = async (title: string, publishedDate: string, updatedDate: string | undefined) => {
  await ensureInitialized();
  const words = parser.parse(title);
  const svg = await satori(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        position: 'relative',
        fontFamily: "'Noto Sans JP', sans-serif",
        background: '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          fontSize: '5rem',
          color: '#000',
          left: '50px',
          top: '60px',
          width: '1100px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0',
          fontWeight: 500,
        }}
      >
        {words.map((word) => {
          // satoriではinline-blockは使用できないため、明示的にblockを指定する
          return (
            <span key={word} style={{ display: 'block' }}>
              {word}
            </span>
          );
        })}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '40px',
          position: 'absolute',
          fontSize: '1.875rem',
          color: '#454545',
          left: '50px',
          bottom: '130px',
          fontWeight: 400,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '40px' }}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='#454545' d='M5 8h14V6H5zm0 0V6zm0 14q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v5.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm9.463-.462Q13 20.075 13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463m5.212-1.162l.7-.7L18.5 17.8V15h-1v3.2z'/%3E%3C/svg%3E"
          />
          {publishedDate}
        </div>
        {updatedDate && (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <img
              style={{ width: '40px' }}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='#454545' d='M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v5h-2v-1H5v10h7v2zM5 8h14V6H5zm0 0V6zm9 14v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.5 5.5zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z'/%3E%3C/svg%3E"
            />
            {updatedDate}
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          fontSize: '3rem',
          color: '#454545',
          left: '50px',
          bottom: '30px',
          fontWeight: 400,
        }}
      >
        しろみつ's Blog
      </div>
      <img
        alt="avatar"
        width="500"
        height="500"
        src={avatar}
        style={{
          position: 'absolute',
          right: '50px',
          bottom: '30px',
          width: '200px',
          height: '200px',
          borderRadius: 128,
        }}
      />
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: Buffer.from(mediumFontData),
          style: 'normal',
          weight: 500,
        },
        {
          name: 'Noto Sans JP',
          data: Buffer.from(regularFontData),
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  const rendered = resvg.render();
  const png = rendered.asPng();
  return png;
};
