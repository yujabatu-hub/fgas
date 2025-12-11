
import React from 'react';
import Section from './components/Section';
import ImageFrame from './components/ImageFrame';

const App: React.FC = () => {
  return (
    <div className="max-w-[43em] mx-auto text-[1.2em] leading-normal text-black pb-10">
      {/* Mascot / Logo Area */}
      <div className="mascot mb-4">
        <div className="logo m-4 flex justify-center">
          <img 
            src="https://thumbs4.imagebam.com/ec/0b/04/ME18LZTX_t.png" 
            alt="Milady Banner"
            className="border-2 border-gray-500 max-w-full w-full p-0 block hover:border-purple-600"
          />
        </div>
      </div>

      <div id="NoWallet" className="text-center text-xs"></div>

      {/* Welcome Section */}
      <Section title="Welcome to Milady from Back! — ゆっくりしていってね!" variant="default">
        <p className="m-2 ml-4">
          Milady from Back is a collection of 3,333 generative pfpNFTs in a neochibi aesthetic inspired by street style tribes—not all of them want to show their backs.
        </p>
      </Section>

      {/* Social Links */}
      <p className="text-center m-2">
        <a href="https://discord.gg/milady" className="text-blue-700 underline hover:text-red-600">Milady from Back Village Community Discord</a> |{' '}
        <a href="https://twitter.com/kafeosas" target="_blank" rel="noreferrer" className="text-blue-700 underline hover:text-red-600">Milady from Back Official Twitter</a>
      </p>

      {/* Collection Section */}
      <Section title="Milady from Back Collection" variant="light">
        <br />
        <ImageFrame src="https://thumbs4.imagebam.com/8d/ed/5e/ME18NKEX_t.gif" />
        <p className="text-center m-2">
          <br />
          <a href="https://opensea.io/collection/backmilady" className="text-blue-700 underline hover:text-red-600">
            You can view and trade the Milady from Back collection on the secondary market at OpenSea.
          </a>
        </p>
      </Section>

      <hr className="border-gray-400 my-4" />

      {/* What is Section */}
      <Section title="What is Milady from Back?" variant="light">
        <p className="m-2 ml-4">
          Milady from Back reimagines the original Back Milady ethos with a fresh spatial twist—characters emerging "from the back," evoking mysterious arrivals from hidden urban alleys or shadowy Tokyo subculture scenes, perfectly aligning with Y2K Japanese fashion tribes like Gyaru and Harajuku.
        </p>
      </Section>

      <hr className="border-gray-400 my-4" />

      {/* Fruits Milady */}
      <div className="p-4 px-12">
        <div className="border border-black p-4 italic text-center bg-white/50">
          <ImageFrame src="https://thumbs4.imagebam.com/30/80/4e/ME18LZU5_t.png" className="!my-0 mb-2" />
          <p className="mt-2 text-center">
            Milady from Back style is inspired by the subcultural fashion tribes of Y2K Japan.
          </p>
        </div>
      </div>

      <hr className="border-gray-400 my-4" />

      {/* Lifestyle Experiences */}
      <Section title="Lifestyle Experiences" variant="light" id="lifestyle_experiences">
        <p className="m-2 ml-4">
          Milady from Back is an aesthetic, a lifestyle and a community. We are constantly
          conceptualizing and developing social extensions of the Milady from Back vision.
        </p>
        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Milady from Back VRtube:</b> Miladies were designed as separate asset layers, so
          they are readymade for Live2D rigging for use as VRtube avatars. We've rolled out Milady from Back VTube avatars in collaboration with Hologram Labs. Just connect your wallet with <a href="https://www.hologram.xyz/" className="text-blue-700 underline hover:text-red-600">the Hologram app</a> to use any Milady from Back in streams or videocall.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/31/13/c6/ME18LZTI_t.png" className="!my-0" />
            <p className="mt-2 text-center">
              <i>"Hey Milady Fans! Welcome to the Daily Milady!!"</i>
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Milady from Back Raves:</b> Holder meetups in the form of warehouse raves put on in major cities like NYC, London, Tokyo in collaboration with their local underground scenes.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <div className="flex justify-center">
              <iframe 
                width="420" 
                height="315" 
                src="https://www.youtube.com/embed/tA7DZ6mMzTQ" 
                title="MILADY RAVE NYC 6-24-22" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="max-w-full"
              ></iframe>
            </div>
            <p className="mt-2 text-center">
              <a href="https://www.instagram.com/remiliaco/" className="text-blue-700 underline hover:text-red-600">Milady Rave #5 - NYC 6-24-22</a>
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Miladycore Bootlegs:</b> <a href="https://store.remilia.org" className="text-blue-700 underline hover:text-red-600">Bootleg merch store</a> for commissioned 
          knockoffs of designer cosmetic series with logos detourned to feature Milady from Back graphics.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/ed/b5/98/ME18LZU2_t.png" className="!my-0" />
            <p className="mt-2 text-center">
              <a href="https://store.remilia.org/collections/milady-bootlegs" className="text-blue-700 underline hover:text-red-600">The Prada bootleg buckethat</a>
            </p>
          </div>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Milady from Back Minecraft Metaverse:</b> Highly customized Minecraft server exclusive to the Milady from Back community, featuring NFT-gated land plots and regular community events. Join by entering milady.world in Minecraft after authenticating in <a href="discord.gg/milady" className="text-blue-700 underline hover:text-red-600">Milady from Back Village discord</a>.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/81/0a/57/ME18NN6Y_t.gif" className="!my-0" />
            <p className="mt-2 text-center">
              <a href="https://discord.gg/milady" className="text-blue-700 underline hover:text-red-600">Join Milady from Back Village</a>
            </p>
          </div>
        </div>
      </Section>

      <hr className="border-gray-400 my-4" />

      {/* Outfit Box */}
      <div className="p-4 px-12">
        <div className="border border-black p-4 italic text-center bg-white/50">
          <ImageFrame src="https://thumbs4.imagebam.com/f0/7c/99/ME18LZTE_t.png" className="!my-0" />
          <p className="mt-2 text-center">
            Milady from Back produces eclectic but spiritually coherent outfits.
          </p>
        </div>
      </div>

      <hr className="border-gray-400 my-4" />

      {/* Expansion Packs */}
      <Section title="Expansion Packs" variant="light" id="expansion_packs">
        <p className="m-2 ml-4">
          As a <a href="https://viralpubliclicense.org" className="text-blue-700 underline hover:text-red-600">copylefted</a> brand, Milady from Back supports a thriving ecosystem of derivative projects from its fan community.
          Remilia Collective also produces official expansions given away to Milady from Back holders following our <a href="https://goldenlight.mirror.xyz/qhsg6I_zn8o40B_Roo9Owabc_9dwAnlxFMADHM3D-Qk" className="text-blue-700 underline hover:text-red-600">hypercitational method</a>.
        </p>
        <hr className="border-gray-300 my-4" />
        
        <p className="m-2 ml-4">
          <b>Banners NFT:</b> Generative NFT header photo series, a free mint offered to Milady from Back holders, made in collaboration with the community's submitted captions.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/47/21/71/ME18LZTZ_t.png" className="!my-0" />
            <p className="mt-2 text-center"><a href="https://miladymaker.net/banners/" className="text-blue-700 underline hover:text-red-600">Banners NFT</a></p>
          </div>
          <p className="m-2 ml-4">
            Banners recontextualizes the userboxes of early internet personalization into modern social media platforms, with a syncretic design citing wikipedia userpages, forum signatures, and operating system themes and text content detourning the basic element of userbox self-description with absurd, aesthetic and hypercitational references.
          </p>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Redacted Remilio Babies:</b> Companion collection to Milady from Back, as the canonical zoomer little brother to Milady. Where Milady from Back explores Japanese style tribes, Remilio uses the neochibi pfp framework to engage reactionary, schizophrenic and zoomer aesthetics.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/37/8b/b9/ME18LZTQ_t.png" className="!my-0" />
            <p className="mt-2 text-center"><a href="https://remilio.org" className="text-blue-700 underline hover:text-red-600">Remilio #3452</a></p>
          </div>
          <p className="m-2 ml-4">Remilio's design extends one of the earliest forks of the "OG Milady" edits, predating the Back Milady NFT.</p>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Milady from Back, That B.I.T.C.H.:</b> Surprise free mint offered directly from contract, featuring Milady from Back in a bootleg english t-shirt each spelling out B-I-T-C-H with random words.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/c2/e1/a7/ME18LZTV_t.png" className="!my-0" />
            <p className="mt-2 text-center"><a href="https://opensea.io/collection/miladybitch" className="text-blue-700 underline hover:text-red-600">Milady, That B.I.T.C.H.</a></p>
          </div>
          <p className="m-2 ml-4">
            Words used for the random generation were sourced from cultural critic Angelicism01's essay on Milady, 
            "<a href="https://cashedcobrazhousewriter.substack.com/p/no-milady-nfts-not-now-the-return" className="text-blue-700 underline hover:text-red-600">NO MILADY NFTS, NOT NOW</a>" with Chief Keef's "Finally Rich", and Chief Keef's "Kush with them Beans," as a playful and irreverent response to the environmental and capitalist criticisms made in Angelicism01's review, as a commentary on the inevitable cultural subsumption process of capitalism.
          </p>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="m-2 ml-4">
          <b>Pixelady Maker:</b> Pixel art derivative heavily referencing wider Milady from Back memes and culture and general extremely online internet aesthetics, lead by <a href="https://twitter.com/egrevore" className="text-blue-700 underline hover:text-red-600">Egrevore</a> with art by <a href="https://twitter.com/MRYOKOU" className="text-blue-700 underline hover:text-red-600">Mr. Yokou</a>.
        </p>
        <div className="p-4 px-12">
          <div className="p-4 italic text-center">
            <ImageFrame src="https://thumbs4.imagebam.com/6a/7b/be/ME18LZTJ_t.png" className="!my-0" />
            <p className="mt-2 text-center"><a href="https://twitter.com/PixeladyMaker" className="text-blue-700 underline hover:text-red-600">Pixelady #3452</a></p>
          </div>
        </div>
      </Section>

      <hr className="border-gray-400 my-4" />

      {/* Details List */}
      <h3 className="ml-[0.3em] text-[1em] mt-[0.3em] mb-[0.1em] underline text-center font-bold">Details:</h3>
      <ul className="list-disc ml-8 mr-4 space-y-1">
        <li>
          <b>Avatar-first design:</b> Illustrated from the beginning to ensure
          strong social media profile aesthetics with an emphasis on fashion. Ties
          into the companion <a href="#expansion_packs" className="text-blue-700 underline hover:text-red-600">Banner NFT</a>.
        </li>
        <li>
          <b>Chain roll function:</b> Randomized cosmetics are organized into <a href="#themes" className="text-blue-700 underline hover:text-red-600">different style themes</a>, with a chance of the
          consecutive generation sticking to the same theme, designed to
          organically produce aesthetic coherency.
        </li>
        <li>
          <b>Graded for Drip:</b> Milady from Back have ranked badges on a <a href="#drip_grade" className="text-blue-700 underline hover:text-red-600">variety of weighted metrics</a>, adding additional
          layers to a speculative market beyond objective trait scarcity.
        </li>
        <li>
          <b>Neochibi Aesthetic:</b> All art produced by a team of <a href="https://twitter.com/remiliacorp333" className="text-blue-700 underline hover:text-red-600">Remilia Collective</a> artists in a
          unique childlike take on anime illustration.
        </li>
        <li>
          <b>Milady from Back Village:</b> Highly curated Discord community and designated
          launchpad for <a href="#expansion_packs" className="text-blue-700 underline hover:text-red-600">expansions to the Milady from Back project</a>, such as
          virtual Milady from Back raves and event nights.
        </li>
      </ul>

      <hr className="border-gray-400 my-4" />

      {/* Style Themes Gallery */}
      <Section title="Style Themes" variant="light">
        <p className="m-2 ml-4">
          Milady from Back generate a variety of accessories, but the two primary
          cosmetics - Hat & Shirt - are each divided into five major style
          themes inspired by Tokyo fashion tribes: Gyaru, Prep, Lolita, Hypebeast, Harajuku.
        </p>

        <div className="grid grid-cols-3 gap-2 p-2">
          {[
            { src: "https://thumbs4.imagebam.com/82/d5/94/ME18LZU8_t.png", title: "Gyaru" },
            { src: "https://thumbs4.imagebam.com/24/28/3e/ME18LZTN_t.png", title: "Prep" },
            { src: "https://thumbs4.imagebam.com/9d/88/fc/ME18LZUF_t.png", title: "Lolita" },
            { src: "https://thumbs4.imagebam.com/84/2a/40/ME18LZUD_t.png", title: "Hypebeast" },
            { src: "https://thumbs4.imagebam.com/40/29/86/ME18LZUC_t.png", title: "Harajuku" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={item.src} 
                alt={`${item.title} Milady`} 
                className="border border-[#777] h-auto w-1/2 object-cover block hover:border-purple-600 transition-colors"
              />
              <div className="p-4 text-center text-sm w-[80%]">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-gray-300 my-4" />
        <p className="m-2 ml-4">
          The bottom border of a Milady from Back card is defined by its theme(s). A
          Milady from Back whose Hat & Shirt cosmetic share the same theme receives +5 on
          their <a href="#drip_score" className="text-blue-700 underline hover:text-red-600">Drip Score</a>.
        </p>
      </Section>

      <hr className="border-gray-400 my-4" />

      {/* Drip Grade */}
      <Section title="Drip Grade" variant="light" id="drip_grade">
        <p className="m-2 ml-4">
          Milady from Back each have a drip score rating their overall stylishness, with
          each cosmetic scored on its rarity, then weighted against the prominence
          of its slot, with a multiplier applied for theme or costume complete
          badges. Drip scores are designed to help tie value to aesthetics over
          pure trait scarcity.
        </p>

        <p className="m-2 ml-4">
          Milady from Back are given a letter grading for their drip score (D, C, B, A, S,
          SS) to help categorize an individual Milady from Back quality.
        </p>
      </Section>

      <div className="p-4 px-12">
        <div className="border border-black p-4 italic text-center bg-white/50">
          <ImageFrame src="https://thumbs4.imagebam.com/bb/8b/34/ME18M00M_t.png" className="!my-0 mb-2" />
          <p className="mt-2 text-center">We love a cute Milady from Back!</p>
        </div>
      </div>

      {/* About Section */}
      <Section title="About Milady from Back — プリンセスメーカーについて" variant="red">
        <div className="text-center">
          <p className="m-2">
            Milady from Back is a <a href="https://remilia.org" target="_blank" rel="noreferrer" className="text-blue-700 underline hover:text-red-600">Remilia Collective</a> project. 
            View the <a href="" className="text-blue-700 underline hover:text-red-600">Analytics Dashboard</a> or read the <a href="https://goldenlight.mirror.xyz/aSbBpC_h07_a5DJA3mXAiclE4VF7UpQUhPbIpGg6iWo" className="text-blue-700 underline hover:text-red-600">Design Notes</a>.
          </p>
          <hr className="border-gray-400 my-4" />
          <p className="text-center m-2">
            <a href="https://discord.gg/milady" className="text-blue-700 underline hover:text-red-600">Milady from Back Village Community Discord</a> |{' '}
            <a href="https://twitter.com/kafeosas" target="_blank" rel="noreferrer" className="text-blue-700 underline hover:text-red-600">Milady from Back Official Twitter</a> |{' '}
            <a href="https://etherscan.io/" target="_blank" rel="noreferrer" className="text-blue-700 underline hover:text-red-600">Contract</a>
          </p>

          <hr className="border-gray-400 my-4" />
          <p className="m-2">
            All Milady from Back branding, assets and NFTs are copylefted under the <a href="https://viralpubliclicense.org" className="text-blue-700 underline hover:text-red-600">Viral Public License</a>.
          </p>
        </div>
      </Section>

      {/* Authorship Hash */}
      <Section title="Authorship Hash — 著者名ハッシュ" variant="red">
        <p className="text-[0.8em] m-2 ml-4">
          Due to vulnerabilities arising from Remilia Collective's <a href="https://goldenlight.mirror.xyz/4SW-snEQ1fIwhdppbMWIPy771XJHrL-lkQNYupCtB1I" className="text-blue-700 underline hover:text-red-600">post-authorship ethos</a> and <a href="https://goldenlight.mirror.xyz/AKywgieGgURdeM_NyewNhwXtxcS6pPscQPvT4JmCdF0" className="text-blue-700 underline hover:text-red-600">distributed artmaking practice</a>, detailed credits are provided below as a "secure hash" to cross-reference with any individual claiming contributions to our work:
        </p>

        <p className="font-mono ml-4 text-[1em]">
          <strong>AUTHORSHIP HASH [SHA1: eeecebb2755eb39baca42e786a6be6b5806decc9]</strong><br />
          
          Milady from Back is an original remix of the character “<a href="https://bottlefairy.fandom.com/wiki/Hororo" className="text-blue-700 underline hover:text-red-600">Hororo</a>” from <a href="https://en.wikipedia.org/wiki/Bottle_Fairy" className="text-blue-700 underline hover:text-red-600">Bottle Fairy (2003)</a>, with:
          assets contributed by 
          <a href="#" className="text-blue-700 underline hover:text-red-600">Jenny</a>, 
          <a href="#" className="text-blue-700 underline hover:text-red-600">Proxy</a>, 
          <a href="#" className="text-blue-700 underline hover:text-red-600">Miya</a>, 
          <a href="#" className="text-blue-700 underline hover:text-red-600">y0b</a>, 
          <a href="#" className="text-blue-700 underline hover:text-red-600">sprite</a>, and 
          <a href="#" className="text-blue-700 underline hover:text-red-600">Sonora</a>.
        </p>
      </Section>
    </div>
  );
};

export default App;
