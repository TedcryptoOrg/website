import cryptoLogo from '../chains/logo/crypto-org.png';
import nomicLogo from '../images/crypto/nomic/nomic-logo.svg';
import evmosLogo from '../chains/logo/evmos.png';
import bitsongLogo from '../chains/logo/bitsong.png';
import chihuahualogo from '../chains/logo/chihuahua.png';
import odinLogo from '../images/crypto/odin/odin_logo.jpeg';
import stargaze from '../chains/logo/stargaze.png';
import cosmos from '../chains/logo/cosmos.png';
import juno from '../chains/logo/juno.png';
import solana from '../images/crypto/solana/solana.png';
import strideLogo from '../chain-registry/stride/images/strd.png';
import rebusLogo from '../images/crypto/rebus/logo.jpg';
import comdexLogo from '../chain-registry/comdex/images/cmdx.png';
import teritoriLogo from '../chain-registry/teritori/images/tori.svg';
import marsLogo from '../chain-registry/mars/images/mars-token.png';
import osmosisLogo from '../chain-registry/osmosis/images/osmo.png';
import whiteWhaleLogo from '../chain-registry/migaloo/images/whitewhale.png';
import akashLogo from '../chain-registry/akash/images/akt.png';
import kujiraLogo from '../chain-registry/kujira/images/kuji.png';
import dymensionLogo from '../chain-registry/dymension/images/dymension-logo.svg';

const nodesData = [
    {
        slug: 'akash',
        name: "Akash",
        tags: "cosmos",
        logo: akashLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/akash?modal=validator&chain=akashnet-2&validator_address=akashvaloper1u7k6tpyvtw25we4mnu6ld6cjs3p8f0256v7g4z&referral=true',
            restake: 'https://restake.app/akash/akashvaloper1u7k6tpyvtw25we4mnu6ld6cjs3p8f0256v7g4z'
        },
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'osmosis',
        name: "OSMOSIS",
        tags: "cosmos",
        logo: osmosisLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/osmosis?modal=validator&chain=osmosis-1&validator_address=osmovaloper1xk23a255qm4kn6gdezr6jm7zmupn23t3pqjjn6&referral=true',
            restake: 'https://restake.app/osmosis/osmovaloper1xk23a255qm4kn6gdezr6jm7zmupn23t3pqjjn6'
        },
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'kujira',
        name: "Kujira",
        tags: "cosmos",
        logo: kujiraLogo,
        stakeUrl: {
            restake: 'https://restake.app/kujira/kujiravaloper1sktw94jvlwsmwtevdgfechnjwq9k76harslqdv'
        },
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'mars',
        name: "MARS",
        tags: "cosmos",
        logo: marsLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/mars-hub?modal=validator&chain=mars-1&validator_address=marsvaloper1e7f0pv2glp5mslqze5cnv4vrwv52rtmllv4ker&referral=true',
            restake: 'https://restake.app/mars/marsvaloper1e7f0pv2glp5mslqze5cnv4vrwv52rtmllv4ker'
        },
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'evmos',
        name: "EVMOs",
        tags: "cosmos",
        logo: evmosLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/evmos?modal=validator&chain=evmos_9001-2&validator_address=evmosvaloper19fv2gwkgv3x53lau3um6tzg7qxvq96grvg97zr&referral=true',
            restake: 'https://restake.app/evmos/evmosvaloper19fv2gwkgv3x53lau3um6tzg7qxvq96grvg97zr'
        },
        isEnabled: true,
        isTest: false,
        isPartner: false,
    },
    {
        slug: 'juno',
        name: "Juno",
        tags: "cosmos",
        logo: juno,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/juno?modal=validator&chain=juno-1&validator_address=junovaloper14xmyp2hdd586frvl0d5mpqy5j9rjkt4khdp5hd&referral=true',
            restake: 'https://restake.app/juno/junovaloper14xmyp2hdd586frvl0d5mpqy5j9rjkt4khdp5hd'
        },
        isEnabled: true,
        isTest: false,
        isWhitelabel: false,
    },
    {
        slug: 'stride',
        name: "Stride",
        tags: "cosmos",
        logo: strideLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/stride?modal=validator&chain=stride-1&validator_address=stridevaloper19twsea48jjup6qrfv55v0fr8hzt7zy4rul5mpg&referral=true',
            restake: 'https://restake.app/stride/stridevaloper19twsea48jjup6qrfv55v0fr8hzt7zy4rul5mpg'
        },
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'migaloo',
        name: "WhiteWhale",
        tags: "cosmos",
        logo: whiteWhaleLogo,
        stakeUrl: {
            restake: 'https://restake.app/migaloo/migaloovaloper1r37anntu9wgk06jeycatp2npmytqugq586jzsh'
        },
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'comdex',
        name: "Comdex",
        tags: "cosmos",
        logo: comdexLogo,
        stakeUrl: {
            restake: 'https://restake.app/comdex/comdexvaloper1zf8k0qlvr0uq4gy73ex9vhjxwlwls7kaxt9jk2'
        },
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'teritori',
        name: "Teritori",
        tags: "cosmos",
        logo: teritoriLogo,
        stakeUrl: {
            restake: 'https://restake.app/teritori/torivaloper1drgucz0twd0thvdkdd9gm9wf7rtarayq6ygarc'
        },
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'nomic',
        name: "Nomic",
        tags: "cosmos",
        logo: nomicLogo,
        stakeUrl: {
            nomic: {
                url: 'https://app.nomic.io/',
                logo: nomicLogo
            }
        },
        isEnabled: true,
    },
    {
        slug: 'rebus',
        name: "Rebus",
        tags: "cosmos",
        logo: rebusLogo,
        stakeUrl: {
            rebus: 'https://app.rebuschain.com/staking'
        },
        isEnabled: true,
    },
    {
        slug: 'bitsong',
        name: "Bitsong",
        tags: "cosmos",
        logo: bitsongLogo,
        stakeUrl: {
            restake: 'https://restake.app/bitsong/bitsongvaloper1qxw4fjged2xve8ez7nu779tm8ejw92rv0vcuqr'
        },
        isEnabled: true,
    },
    {
        slug: 'chihuahua',
        name: "Chihuahua",
        tags: "cosmos",
        logo: chihuahualogo,
        stakeUrl: {
            restake: 'https://restake.app/chihuahua/chihuahuavaloper1n7n0rgm37yp8rflxyhw2u75eh6j6tqnp72w5zq'
        },
        isEnabled: true,
        isTest: false,
    },
    {
        slug: 'dymension',
        name: "Dymension (Bad Kids)",
        tags: "cosmos",
        logo: dymensionLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/dymension?modal=validator&chain=dymension_1100-1&validator_address=dymvaloper1574uygjnlkegtdtltyw7xrq43qsms28lcwnurh',
            dymension: {
                url: 'https://portal.dymension.xyz/dymension/staking',
                logo: dymensionLogo
            },
            restake: 'https://restake.app/dymension/dymvaloper1574uygjnlkegtdtltyw7xrq43qsms28lcwnurh'
        },
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'stargaze',
        name: "Stargaze (Bad Kids)",
        tags: "cosmos",
        logo: stargaze,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/stargaze?modal=validator&chain=stargaze-1&validator_address=starsvaloper1gz645mefvu5emd0llpfjchqqpyuxt0xxq34per&referral=true',
            restake: 'https://restake.app/stargaze/starsvaloper1gz645mefvu5emd0llpfjchqqpyuxt0xxq34per'
        },
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'solana',
        name: "Solana (Stake2Earn)",
        tags: "solana",
        logo: solana,
        stakeUrl: {
            solanaBeach: {
                url: 'https://solanabeach.io/validator/6559KMdiUseNSAkRcK9WcFcNTppoj6jWtKVedpMkBYCn',
                logo: solana
            }
        },
        isEnabled: true,
        isTest: false,
        isPartner: true,
    },
    {
        slug: 'cosmoshub',
        name: "Cosmos Hub (Don Cryptonium)",
        tags: "cosmos",
        logo: cosmos,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/cosmos-hub?modal=validator&chain=cosmoshub-4&validator_address=cosmosvaloper1rj6324uq904z5zr96zg6ew9qjyau9u6h5nflg6&referral=true',
            restake: 'https://restake.app/cosmoshub/cosmosvaloper1rj6324uq904z5zr96zg6ew9qjyau9u6h5nflg6'
        },
        isEnabled: true,
        isTest: false,
        isWhitelabel: true,
    },
    {
        slug: 'cryptoorgchain',
        name: "CROnquerorsNode",
        tags: "cosmos",
        logo: cryptoLogo,
        stakeUrl: {
            keplr: 'https://wallet.keplr.app/chains/crypto-org?modal=validator&chain=crypto-org-chain-mainnet-1&validator_address=crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg&referral=true',
            restake: 'https://restake.app/cryptoorgchain/crocncl1s078nr9kp4ulsxgnsasnr3k6zg5q9erps348eg'
        },
        isEnabled: true,
        price: 0,
        isPartner: true
    },
    {
        slug: 'odin',
        name: "Odin",
        tags: "cosmos",
        logo: odinLogo,
        stakeUrl: {
            restake: 'https://restake.app/odin/odinvaloper1sxvwx7h6wp4hcn3rh2xtl8mv6w0w9mvudd6e3j'
        },
        isEnabled: true,
    },
]

export default nodesData;
