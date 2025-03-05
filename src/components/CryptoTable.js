import React, { useEffect, useState } from 'react';
import Gain from './Gain';
import { fetchCryptoData } from './cryotoService';

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [livePrices, setLivePrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchCryptoData();
                setCryptoData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    useEffect(() => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

        ws.onmessage = (event) => {
            const tickerData = JSON.parse(event.data);
            const newPrices = {};

            tickerData.forEach((coin) => {
                const symbol = coin.s.toLowerCase(); // Ex: btcusdt
                newPrices[symbol] = {
                    bid: parseFloat(coin.b), // Prix d'achat
                    ask: parseFloat(coin.a), // Prix de vente
                };
            });

            setLivePrices(newPrices);
        };

        ws.onerror = (error) => console.error('WebSocket error:', error);
        ws.onclose = () => console.log('WebSocket closed');

        return () => ws.close();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur�: {error}</p>;

    return (
        <div>
            <div class="crypto">
                <Gain/>
                <h2>Tableau des prix des crypto-monnaies</h2>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prix d'achat</th>
                                <th>Prix de vente</th>
                                <th>Volume</th>
                                <th>Capitalisation boursi�re</th>
                                <th>achat</th>
                                <th>vente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData.map((coin) => {
                                const symbol = `${coin.symbol}usdt`.toLowerCase(); // Correspondance avec Binance
                                const bidPrice = livePrices[symbol]?.bid || coin.current_price * 0.99; // Approximation si pas de donn�es
                                const askPrice = livePrices[symbol]?.ask || coin.current_price * 1.01; // Approximation si pas de donn�es

                                return (
                                    <tr key={coin.id}>
                                        <td>{coin.name}</td>
                                        <td>{bidPrice.toFixed(2)} $</td>
                                        <td>{askPrice.toFixed(2)} $</td>
                                        <td>{coin.total_volume}</td>
                                        <td>{coin.market_cap}</td>
                                        <td><a className="button" href="/">achat</a></td>
                                        <td><a className="button" href="/">vente</a></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
     </div>
    );
};

export default CryptoTable;

