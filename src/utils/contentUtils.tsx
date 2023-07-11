import ETHCoin from "../../public/assets/ethereum.png";
import SecurityBadge from "../../public/assets/badge-check.png";
import PieChart from "../../public/assets/chart.png";
import StarBadge from "../../public/assets/badge-star.png";

export const header_content = {
    logo: {
        title: "Cosmoverse",
    },
    menu: [
        {
            title: "Learn",
            active: true,
        },
        {
            title: "Build",
            active: false,
        },
        {
            title: "Explore",
            active: false,
        }
    ],
    link: {
        title: "Get Cosmoverse",
    },
};

export const hub_content = [
    {
        title: "MarketPlace",
        text: "Experience a Next-Generation Decentralized Exchange, facilitating the seamless swapping of digital assets across the entire Interchain, boasting minimal fees and instant transaction confirmations.",
        image: ETHCoin,
    },
    {
        title: "Secutiry Provider",
        text: "With the imminent Interchain Security feature, HEDRON will emerge as a leading guardian of multiple chains, granting additional staking rewards for its role.",
        image: SecurityBadge,
    },
    {
        title: "Router",
        text: "At the heart of the Cosmo Hub's mission lies the establishment of IBC connections with compatible chains, as well as the operation of decentralized bridges with esteemed networks such as Ethereum and Bitcoin.",
        image: PieChart,
    },
    {
        title: "Custodian",
        text: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.",
        image: StarBadge,
    }
];

export const footer_content = [
    {
        subject: {
            title: "Learn",
            subtitles: [
                "Introduction",
                "Features",
                "Staking",
                "Get HEDRON",
                "FAQ",
            ],
        },
    },
    {
        subject: {
            title: "Build",
            subtitles: [
                "Developer Portal",
                "Ignite CLI",
                "Cosmoverse SDK",
                "IBC Protocol",
            ],
        },
    },
    {
        subject: {
            title: "Explore",
            subtitles: [
                "Tokens",
                "Apps & Service",
                "Wallets",
                "Gravity DEX",
                "Blog",
            ],
        },
    },
    {
        subject: {
            title: "Participate",
            subtitles: [
                "Community",
                "Contributors",
                "Events",
                "Newsletters",
            ],
        },
    },
    {
        subject: {
            title: "Resources",
            subtitles: [
                "About",
                "Press Kit",
                "Design",
                "Resources",
            ],
        },
    },
];
