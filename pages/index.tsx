
// index.tsx
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [supply, setSupply] = useState("");
    const [decimals, setDecimals] = useState("9");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [twitter, setTwitter] = useState("");
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");
    const [creatorName, setCreatorName] = useState("");
    const [creatorUrl, setCreatorUrl] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [revokeFreeze, setRevokeFreeze] = useState(false);
    const [revokeMint, setRevokeMint] = useState(false);
    const [revokeMetadata, setRevokeMetadata] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLaunch = async () => {
        if (!name || !symbol || !supply) {
            alert("Please fill all required fields");
            return;
        }
        setLoading(true);
        try {
            // Hier würde dein Solana Token Erstellungscode laufen
            alert("Token created successfully!");
        } catch (e) {
            console.error(e);
            alert("Error deploying token");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center p-10">
            <div className="bg-black p-6 rounded-2xl shadow-xl w-full max-w-2xl text-white">
                <h1 className="text-2xl font-bold mb-6 text-orange-400 text-center">Create Your Meme Coin 🪙</h1>
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Token Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Token Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Total Supply" value={supply} onChange={(e) => setSupply(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Decimals" value={decimals} onChange={(e) => setDecimals(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Logo IPFS URL" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
                <textarea className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Website URL" value={website} onChange={(e) => setWebsite(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Twitter URL" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Telegram URL" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Discord URL" value={discord} onChange={(e) => setDiscord(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Creator Name" value={creatorName} onChange={(e) => setCreatorName(e.target.value)} />
                <input className="p-2 rounded bg-zinc-800 mb-2 w-full" placeholder="Creator Website" value={creatorUrl} onChange={(e) => setCreatorUrl(e.target.value)} />

                <div className="flex flex-col space-y-2 my-4">
                    <label><input type="checkbox" checked={revokeFreeze} onChange={() => setRevokeFreeze(!revokeFreeze)} /> Revoke Freeze Authority</label>
                    <label><input type="checkbox" checked={revokeMint} onChange={() => setRevokeMint(!revokeMint)} /> Revoke Mint Authority</label>
                    <label><input type="checkbox" checked={revokeMetadata} onChange={() => setRevokeMetadata(!revokeMetadata)} /> Revoke Metadata Authority</label>
                </div>

                <WalletMultiButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded mt-4" />
                <button onClick={handleLaunch} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded mt-4 w-full">
                    {loading ? "Deploying..." : "Deploy Token"}
                </button>
            </div>
        </main>
    );
}
