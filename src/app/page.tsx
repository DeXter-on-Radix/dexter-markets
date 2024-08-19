enum Device {
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP",
}

// Define a shared variable for container dimensions and padding to ensure
// consistency across sections with full-width backgrounds.
const containerWidthAndPadding = "w-[1080px] max-w-[100vw] m-auto p-8 ";

export default function Landing() {
  return (
    <div className="bg-green-dark text-white min-h-[100vh]">
      <HeroSection />
    </div>
  );
}

function HeroSectionOld() {
  return (
    <main className="text-center">
      <h1 className="text-4xl pt-20 pb-4">DeXter Markets</h1>
      <p className="text-gray-400">The NFT marketplace Radix deserves</p>
      <button className="px-10 py-2 bg-dexter-green-OG text-black rounded mt-8">
        Join Waitlist
      </button>
    </main>
  );
}

function HeroSection() {
  return (
    <div
      className={
        `${containerWidthAndPadding} ` +
        `flex flex-col justify-center items-center ` +
        `min-h-[100vh] pb-[20vh]`
      }
    >
      <div className="flex justify-center relative">
        <div
          className={
            `flex flex-col items-start justify-center z-50 ` +
            `max-[820px]:items-center max-[820px]:text-center ` +
            `min-[821px]:max-w-[60%] `
          }
        >
          <img
            src="/dexter-logo-and-lettering.svg"
            alt="dexter logo and lettering"
            className="pb-8 h-20"
          />
          <h1
            className={
              `!m-0 z-100 ` +
              `max-[420px]:py-4 ` +
              `max-[820px]:max-w-[600px] max-[820px]:!mb-2 ` +
              `text-5xl`
            }
          >
            The NFT marketplace Radix deserves.
          </h1>
          <DexterButton
            title={"Join Waitlist"}
            targetUrl="https://t.me/+LqOcx8YZGA83Mzlk"
          />
          <KeyFeatures showFor={Device.MOBILE} />
        </div>
        <div className="relative">
          <img
            src="/landing/dexter-mascotte.png"
            alt="Dexter Mascotte"
            className={`w-[285px] z-[100] max-[820px]:hidden relative `}
          />
          <img
            src="/landing/nft-cards.png"
            alt="Dexter Mascotte"
            className={`z-[50] max-[820px]:hidden absolute top-[-10px] scale-150`}
          />
        </div>
      </div>
      <KeyFeatures showFor={Device.DESKTOP} />
    </div>
  );
}

function KeyFeatures({ showFor }: { showFor: Device }) {
  const content = [
    ["icons/rocket.svg", "Browse collections"],
    ["icons/decentralized.svg", "List and trade your NFTs"],
    ["icons/coins.svg", "Revenue share model"],
  ];
  return (
    <div
      className={
        showFor === Device.DESKTOP
          ? `flex justify-between w-full max-w-3xl z-50 pt-10 ` +
            `relative top-10 ` +
            `min-[401px]:px-4 ` +
            `max-[820px]:hidden `
          : `flex justify-between w-full max-w-2xl z-50 pt-10 ` +
            `min-[401px]:px-4 ` +
            `min-[821px]:hidden `
      }
    >
      {content.map(([iconUrl, text], indx) => {
        return (
          <div
            key={indx}
            className={
              `flex flex-col justify-start items-center w-24 ` +
              `min-[821px]:w-32`
            }
          >
            <img
              src={iconUrl}
              alt={text}
              className={
                `w-[24px] ` +
                `min-[821px]:w-[28px] min-[821px]:opacity-100 ` +
                `min-[400px]:w-[26px]`
              }
            />
            <p
              className={
                `pt-2 text-center opacity-80 text-sm ` +
                `max-[380px]:text-xs ` +
                `min-[821px]:text-base`
              }
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

interface DexterButtonProps {
  title: string;
  targetUrl?: string;
  targetBlank?: boolean;
  maxWidth?: string;
}

function DexterButton({
  title,
  targetUrl,
  targetBlank,
  maxWidth = "w-[220px]",
}: DexterButtonProps) {
  return (
    <a
      href={targetUrl}
      className={`z-100 min-w-[220px] max-${maxWidth}`}
      target={`${targetBlank ? "_blank" : ""}`}
    >
      <button
        className={
          `min-h-[44px] ${maxWidth} px-4 my-6 mt-8 rounded ` +
          `bg-dexter-green-OG text-black uppercase ` +
          `opacity-100 cursor-pointer `
        }
      >
        <span className="font-bold text-sm tracking-[.1px] ">{title}</span>
      </button>
    </a>
  );
}
