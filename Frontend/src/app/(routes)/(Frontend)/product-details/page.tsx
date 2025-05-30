"use client";
import React from "react";

const page = () => {
  const productDetails = [
    {
      productImages:
        "https://images.unsplash.com/photo-1703065477962-80bb1b614fd7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productGallery: [
        "https://images.unsplash.com/photo-1623950015175-ec6f6e28d183?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1565967249821-083c4775e5bc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1612247905736-c283f684cd55?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      productName: "Samsung Galaxy S25 Ultra",
      productPrice: "236,999.00",
      productBrand: "Samsung",
      productCategory: "Smartphones",
      productAddedON: "22nd, Jan, 2025",
      productLastUpdated: "18th, May, 2025",
      productReleaseDate: "2025, February 03",
      productSoftwareInfo: "Android 15, up to 7 major upgrades, One UI 7",
      productDisplay: "6.9 1440x3120 pixels",
      productCamera: "200MP 4320p",
      productRam: "12/16GB RAM Snapdragon 8 Elite",
      productBattery: "5000mAh 45W 15W",
      productRating: [
        { user: "overall", rate: "10" },
        { user: "Design", rate: 10 },
        { user: "Display", rate: 10 },
        { user: "Performance", rate: 10 },
        { user: "Camera", rate: 10 },
        { user: "Connectivity", rate: 10 },
        { user: "Features", rate: 10 },
        { user: "Battery", rate: 10 },
        { user: "Usability", rate: 10 },
      ],
      productPros: [
        "Titanium frame, IP68 dust/water resistant.",
        "6.9-inch LTPO AMOLED 2X, 120Hz, HDR10+.",
        "Snapdragon 8 Elite with 12/16GB RAM.",
        "Triple rear camera 200MP with dual 50MP.",
        "5000mAh battery with 45W charging.",
      ],
      productCons: ["FM radio was unavailable."],
      specifications: {
        official: "12GB 256GB ৳2,36,999",
        unofficial: "12GB 256GB ৳1,16,000 / 12GB 512GB ৳1,28,000",
        globalPrice: "$1,300",
      },
      launchInfo: {
        announced: "2025, January 22",
        status: "Available. Released 2025, February 03",
      },
      network: {
        Technology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
        band: "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (Dual SIM model only) CDMA 800 / 1900 TD-SCDMA",
        bands: "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 CDMA2000 1xEV-DO",
        bandss: "1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 32, 38, 39, 40, 41, 66 - International 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 18, 19, 20 25, 26, 28, 29, 30, 38, 39, 40, 41, 48, 66, 71 - USA unlocked",
        bandsss: "1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 38, 40, 41, 66, 75, 77, 78 SA/NSA/Sub6 - International 1, 2, 5, 7, 25, 28, 41, 66, 71, 77, 78, 257, 258, 260, 261 SA/NSA/Sub6/mmWave - USA unlocked",
        Speed: "HSPA, LTE (up to 7CA), 5G",
      },
      bodySpecs: {
        dimensions: "162.8 x 77.6 x 8.2 mm (6.41 x 3.06 x 0.32 in)",
        weight: "218 g (7.69 oz)",
        build: "Glass front (Corning Gorilla Armor 2), glass back (Corning Gorilla Armor 2), titanium frame (grade 5)",
        sim: "Nano-SIM + Nano-SIM + eSIM + eSIM (max 2 at a time) - INT Nano-SIM + eSIM + eSIM (max 2 at a time) - USA Nano-SIM + Nano-SIM - CN",
        others: "IP68 dust/water resistant (up to 1.5m for 30 min) Stylus",
      },
      displaySpecs: {
        Type: "Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)",
        Size: "6.9 inches, 116.9 cm² (~92.5% screen-to-body ratio)",
        Resolution: "1440 x 3120 pixels, 19.5:9 ratio (~505 ppi density)",
        Protection: "Corning Gorilla Armor 2",
        Features: "Always-on display DX anti-reflective coating",
      },
      platformSpecs: {
        OS: "Android 15, up to 7 major Android upgrades, One UI 7",
        Chipset: "Qualcomm Snapdragon 8 Gen 4 (3 nm)",
        CPU: "Octa-core (2x4.47 GHz Oryon V2 Phoenix L + 6x3.53 GHz Oryon V2 Phoenix M)",
        GPU: "Adreno 830"
      },
      memorySpecs: {
        cardSlot: "No",
        internal: "256/512 GB / 1TB UFS 4.0",
        ram: "12/16 GB",
        variants: "12GB 256GB / 12GB 512GB / 12GB 1TB / 16GB 1TB"
      },
      mainCamera: {
        type: "Quad",
        cameras: [
          "200 MP, f/1.7, 24mm (wide), 1/1.3\", 0.6µm, multi-directional PDAF, OIS",
          "10 MP, f/2.4, 67mm (telephoto), 1/3.52\", 1.12µm, PDAF, OIS, 3x optical zoom",
          "50 MP, f/3.4, 111mm (periscope telephoto), 1/2.52\", 0.7µm, PDAF, OIS, 5x optical zoom",
          "50 MP, f/1.9, 120˚ (ultrawide), 0.7µm, dual pixel PDAF, Super Steady video"
        ],
        features: [
          "Laser AF",
          "Best Face",
          "LED flash",
          "auto-HDR",
          "panorama"
        ],
        video: "8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps, 10-bit HDR, HDR10+, stereo sound rec., gyro-EIS"
      },
      selfieCamera: {
        type: "Single",
        specs: [
          "12 MP, f/2.2, 26mm (wide), 1/3.2\", 1.12µm, dual pixel PDAF"
        ],
        features: ["HDR", "HDR10+"],
        video: "4K@30/60fps, 1080p@30fps"
      },
      soundInfo: {
        loudspeaker: "Yes, with stereo speakers",
        headphoneJack: "No",
        audioFeatures: [
          "32-bit/384kHz audio",
          "Tuned by AKG"
        ]
      },
      connectivityInfo: {
        WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6e/7, tri-band, Wi-Fi Direct",
        Bluetooth: "5.4, A2DP, LE",
        GPS: "GPS, GLONASS, BDS, GALILEO, QZSS",
        NFC: "Yes",
        FMRadio: "No",
        USB: "USB Type-C 3.2, DisplayPort 1.2, OTG",
        Infrared: "No"
      },
      featuresInfo: {
        Sensors: "Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer",
        SamsungDeX: "Samsung DeX, Samsung Wireless DeX (desktop experience support)",
        UWB: "Ultra Wideband (UWB) support",
        CircleToSearch: "Circle to Search"
      },
      batteryInfo: {
        Type: "Non-removable Li-Ion",
        Capacity: "5000 mAh",
        Charging: "45W wired, PD3.0, 65% in 30 min",
        WirelessCharging: "15W wireless (Qi2 Ready)",
        ReverseWireless: "4.5W reverse wireless"
      },
      moreInfo: {
        MadeBy: "South Korea",
        Colors: [
          "Titanium Silver Blue",
          "Titanium Black",
          "Titanium White Silver",
          "Titanium Gray",
          "Titanium Jade Green",
          "Titanium Jet Black",
          "Titanium Pink Gold"
        ],
        Models: [
          "SM-S938B",
          "SM-S938B/DS",
          "SM-S938U",
          "SM-S938U1",
          "SM-S938W",
          "SM-S938N",
          "SM-S9380",
          "SM-S938E",
          "SM-S938E/DS"
        ]
      },

    },
  ];
  return (
    <div className="max-w-[1440px] px-4 2xl:px-0 flex">
      {productDetails.map((product, index) => (
        <div key={index}>
          <img src={product.productImages} alt={product.productName} />
          {product.productGallery.map((gallery, index) => (
            <img key={index} src={gallery} alt={product.productName} />
          ))}
          <h1>{product.productName}</h1>
          <p>Price: {product.productPrice}</p>
          <p>Brand: {product.productBrand}</p>
          <p>Category: {product.productCategory}</p>
          <p>Added on: {product.productAddedON}</p>
          <p>Last updated: {product.productLastUpdated}</p>
          <button>Add to Compare</button>
          <p>Release Date: {product.productReleaseDate}</p>
          <p>Software Info: {product.productSoftwareInfo}</p>
          <p>Display: {product.productDisplay}</p>
          <p>Camera: {product.productCamera}</p>
          <p>RAM: {product.productRam}</p>
          <p>Battery: {product.productBattery}</p>
          <div>
            <h2>Our Rating</h2>
            <i>The overall rating is based on review by our experts</i>
            {product.productRating.map((rating, index) => (
              <div key={index}>
                {rating.user}: {rating.rate}
              </div>
            ))}
          </div>
          <h3>Pro and cons</h3>
          <div>
            <h2>Pros</h2>
            {product.productPros.map((pro, idx) => (
              <div key={idx}>+ {pro}</div>
            ))}
          </div>
          <div>
            <h3>Cons</h3>
            {product.productCons.map((con, idx) => (
              <div key={idx}>- {con}</div>
            ))}
          </div>
          <div>
            <h3>Specifications & Prices</h3>
            <p><strong>Official:</strong> {product.specifications.official}</p>
            <p><strong>Unofficial:</strong> {product.specifications.unofficial}</p>
            <p><strong>Global Price:</strong>{product.specifications.globalPrice}</p>
          </div>
          <div>
            <h3>Launch</h3>
            <p><strong>Announced:</strong> {product.launchInfo.announced}</p>
            <p><strong>Status:</strong> {product.launchInfo.status}</p>
          </div>
          <div>
            <h3>Network</h3>
            <p><strong>Technology:</strong> {product.network.Technology}</p>
            <p><strong>2G bands </strong> {product.network.band}</p>
            <p><strong>3G bands </strong> {product.network.bands}</p>
            <p><strong>4G bands </strong> {product.network.bandss}</p>
            <p><strong>4G bands </strong> {product.network.bandsss}</p>
            <p><strong>Speed </strong> {product.network.Speed}</p>
          </div>
          <div>
            <h3>Body</h3>
            <p><strong>Dimensions:</strong> {product.bodySpecs.dimensions}</p>
            <p><strong>Weight:</strong> {product.bodySpecs.weight}</p>
            <p><strong>Build:</strong> {product.bodySpecs.build}</p>
            <p><strong>SIM:</strong> {product.bodySpecs.sim}</p>
            <p><strong>Others:</strong> {product.bodySpecs.others}</p>
          </div>
          <div>
            <h3>Display</h3>
            <p><strong>Type:</strong> {product.displaySpecs.Type}</p>
            <p><strong>Size:</strong> {product.displaySpecs.Size}</p>
            <p><strong>Resolution:</strong> {product.displaySpecs.Resolution}</p>
            <p><strong>Protection:</strong> {product.displaySpecs.Protection}</p>
            <p><strong>Features:</strong> {product.displaySpecs.Features}</p>
          </div>
          <div>
            <h2>Platform</h2>
            <p><strong>OS:</strong> {product.platformSpecs.OS}</p>
            <p><strong>Chipset:</strong> {product.platformSpecs.Chipset}</p>
            <p><strong>CPU:</strong> {product.platformSpecs.CPU}</p>
            <p><strong>GPU:</strong> {product.platformSpecs.GPU}</p>
          </div>
          <div>
            <h2>Memory</h2>
            <p><strong>Card Slot:</strong> {product.memorySpecs.cardSlot}</p>
            <p><strong>Internal:</strong> {product.memorySpecs.internal}</p>
            <p><strong>RAM:</strong> {product.memorySpecs.ram}</p>
            <p><strong>Variants:</strong> {product.memorySpecs.variants}</p>
          </div>
          <div>
            <h2>Main Camera</h2>
            <p><strong>Card Slot:</strong> {product.memorySpecs.cardSlot}</p>
            <p><strong>Type:</strong> {product.mainCamera.type}</p>
            <p><strong>Cameras:</strong></p>
            <ul className="list-disc pl-6">
              {product.mainCamera.cameras.map((cam, index) => (
                <li key={index}>{cam}</li>
              ))}
            </ul>
            <p><strong>Features:</strong></p>
            <ul className="list-disc pl-6">
              {product.mainCamera.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p><strong>Video:</strong> {product.mainCamera.video}</p>
          </div>
          <div>
            <h2>Selfie Camera</h2>
            <p><strong>Type:</strong> {product.selfieCamera.type}</p>

            <p><strong>Specs:</strong></p>
            <ul className="list-disc pl-6">
              {product.selfieCamera.specs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p><strong>Features:</strong></p>
            <ul className="list-disc pl-6">
              {product.selfieCamera.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p><strong>Video:</strong> {product.selfieCamera.video}</p>
          </div>
          <div>
            <h2>Sound</h2>
            <p><strong>Loudspeaker:</strong> {product.soundInfo.loudspeaker}</p>
            <p><strong>3.5mm Jack:</strong> {product.soundInfo.headphoneJack}</p>
            <p><strong>Audio Features:</strong></p>
            <ul className="list-disc pl-6">
              {product.soundInfo.audioFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Connectivity</h2>
            <ul className="list-disc pl-6">
              {Object.entries(product.connectivityInfo).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Features</h2>
            <ul className="list-disc pl-6">
              {Object.entries(product.featuresInfo).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Battery</h2>
            <ul className="list-disc pl-6">
              {Object.entries(product.batteryInfo).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">More</h2>
            <p><strong>Made by:</strong> {product.moreInfo.MadeBy}</p>

            <div className="mt-2">
              <strong>Colors:</strong>
              <ul className="list-disc pl-6">
                {product.moreInfo.Colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>

            <div className="mt-2">
              <strong>Models:</strong>
              <ul className="list-disc pl-6">
                {product.moreInfo.Models.map((model, index) => (
                  <li key={index}>{model}</li>
                ))}
              </ul>
            </div>
            <div >
              <strong>Disclaimer:</strong> We do not guarantee that the information on this page is 100% accurate and up to date.
            </div>
            <section>
              <h2 >{product.productName} Price in Bangladesh May 2025</h2>
              <p >
                Samsung Galaxy S25 Ultra is now available in four variants (256GB/512GB/1TB storage with 12/16GB RAM).
                Currently, the Samsung Galaxy S25 Ultra is priced at <strong>236,999 Taka</strong> in Bangladesh. It features a
                5000mAh battery with 45W fast charging, runs on Android 15, and is powered by a Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm) chipset.
              </p>
              <table >
                <tbody>
                  <tr >
                    <th>Model</th>
                    <td>Samsung Galaxy S25 Ultra</td>
                  </tr>
                  <tr >
                    <th>Price</th>
                    <td>BDT. 2,36,999</td>
                  </tr>
                  <tr >
                    <th>Display</th>
                    <td>6.9″ 1440×3120 pixels</td>
                  </tr>
                  <tr >
                    <th>RAM</th>
                    <td>12/16 GB</td>
                  </tr>
                  <tr >
                    <th>ROM</th>
                    <td>256/512 GB / 1TB</td>
                  </tr>
                  <tr>
                    <th>Released</th>
                    <td>2025, February</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section >
              <h2 className="text-2xl font-bold mb-4">Samsung Galaxy S25 Ultra Highlight</h2>
              <p className="mb-4">
                Samsung Galaxy S25 Ultra will be launched in <strong>February 2025</strong>. It comes with model numbers
                <em>SM-S938B, SM-S938B/DS, SM-S938U, SM-S938U1, SM-S938W, SM-S938N, SM-S9380, SM-S938E, SM-S938E/DS</em>.
              </p>
              <p className="mb-4">
                Its dimensions are <strong>162.8 x 77.6 x 8.2 mm</strong> with a weight of <strong>218 grams</strong>. The display is a
                <strong>6.9-inch Dynamic LTPO AMOLED 2X</strong> panel with a resolution of <strong>1440 x 3120 pixels</strong>.
                The display is protected by Glass front and back (Gorilla Glass Victus) and has an aluminum frame.
              </p>
              <p className="mb-4">
                The device is powered by the <strong>Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)</strong> chipset and runs
                on <strong>Android 15</strong>. It features an octa-core CPU (2×4.47 GHz Oryon V2 Phoenix L + 6×3.53 GHz Oryon V2 Phoenix M).
              </p>
              <p className="mb-4">
                The Galaxy S25 Ultra sports a quad-camera setup on the back:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>200 MP wide</li>
                <li>10 MP telephoto</li>
                <li>50 MP periscope telephoto</li>
                <li>50 MP ultrawide camera</li>
              </ul>
              <p className="mb-4">
                For selfies, it has a <strong>12 MP camera</strong> inside the display notch. Video recording supports
                8K@24/30fps, 4K@30/60/120fps, 1080p@30/60/240fps, HDR10+, stereo sound recording, and gyro-EIS stabilization.
              </p>
              <p className="mb-4">
                Memory variants include <strong>12/16GB RAM</strong> and <strong>256/512GB/1TB storage</strong>. It supports microSDXC card expansion via a dedicated slot.
              </p>
              <p className="mb-4">
                The phone houses a <strong>5000mAh battery</strong> with <strong>45W fast charging</strong>. It supports dual nano-SIM slots
                and works on <strong>2G/3G/4G/5G networks</strong>. The fingerprint sensor is located under the display.
              </p>
              <p>
                Additional connectivity includes WLAN, Bluetooth, and USB ports among other features.
              </p>
            </section>
            <section >
              <h2 className="text-2xl font-bold mb-6">
                Your question and our opinion about the Galaxy S25 Ultra
              </h2>
              <p className="mb-6">
                Which of the following questions will you have about this phone? Let’s
                justify these. There, we are including the major questions and answers
                about this phone. So, let’s start now.
              </p>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">When will it be released?</h3>
                <p className="text-gray-700">It will launch in February 2025.</p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">
                  What is the price of the Samsung Galaxy S25 Ultra?
                </h3>
                <p className="text-gray-700">
                  The price of the Samsung Galaxy S25 Ultra is BDT. 2,36,999.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">
                  How much RAM and ROM does it contain?
                </h3>
                <p className="text-gray-700">
                  It has two variants of 12/16GB in RAM and three variants of 256/512GB/1TB
                  in ROM. Overall, there are four variants (256GB/12GB, 512GB/12GB, 1TB/12GB,
                  1TB/16GB) on the market.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">
                  Which type of display panel is used?
                </h3>
                <p className="text-gray-700">
                  It has a 6.9″ Dynamic LTPO AMOLED 2X Display panel with 1440 x 3120 pixels
                  resolution.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">How are the processor and chipset?</h3>
                <p className="text-gray-700">
                  It contains a Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm).
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">
                  What are the camera and video capabilities?
                </h3>
                <p className="text-gray-700">
                  The quad-camera setup on the back is 200MP+10MP+50MP+50MP, and a 12MP selfie
                  camera. The video recording capability is 8K@24/30fps, 4K@30/60/120fps,
                  1080p@30/60/240fps, HDR10+, stereo sound rec., gyro-EIS.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">Does it support a 5G network?</h3>
                <p className="text-gray-700">It supports a 5G network with 2G, 3G, and 4G.</p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">What is the battery capacity?</h3>
                <p className="text-gray-700">
                  The battery capacity is a 5000mAh Li-Polymer battery with 45W fast charging.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">What sensors does this phone have?</h3>
                <p className="text-gray-700">
                  Fingerprint, accelerometer, gyro, proximity, compass, barometer sensor.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold text-lg mb-1">
                  Which country and company manufactured it?
                </h3>
                <p className="text-gray-700">
                  Samsung manufactured it and the phone was made in South Korea.
                </p>
              </div>
            </section>
            <div>
              <h3>Reason to Buy</h3>
              <p>In this paragraph, we will describe why people buy this smartphone. Why did a person buy this smartphone? Firstly, when anyone wants to buy a device, they find the flagship features according to its price. So, let us find out some of the Galaxy S25 Ultra’s eligible features.</p>
            </div>
            <div>
              <h3>Our Verdict</h3>
              <p>In conclusion, we are giving our verdict on this device. If you want to buy the best 5G smartphone under 250K Taka. The Samsung Galaxy S25 Ultra will be in the first row among the best smartphones. Dear friends, if you are attracted to online games like Free Fire, PUBG Mobile, etc., you can buy them because they have RAM and a good processor that uses the Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm) chipset. If you want a big backup on charge, you can buy this because it has a huge 5000mAh battery. In addition, it’s a 5G supportable smartphone. So, you can get good network facilities on it. However, it has a quad-cam setup with a 200MP primary camera. So, the image and video capabilities may be good. Therefore, to judge all of these reasons you can buy this.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
