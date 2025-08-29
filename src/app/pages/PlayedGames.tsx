"use client";
import React, { useState } from "react";
import "../globals.css";

type Character = { name: string; image: string };
type Weapon = { name: string; image: string };
type Map = { name: string; image: string };

type Game = {
  name: string;
  stats: string;
  logo: string;
  year: number;
  characters?: Character[];
  weapons?: Weapon[];
  maps?: Map[];
};

const PlayedGames: React.FC = () => {
  // 🟢 semua hook selalu dipanggil di sini (tidak berubah antar render)
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);

  const games: Game[] = [
    {
      name: "Call Of Duty Mobile",
      stats: "死Beban_tim死",
      logo: "/codm_logo.jpg",
      year: 2018,
      characters: [
        { name: "Kestrel-Twillight Symphony", image: "/Kastrel.jpg" },
        { name: "Ghost-Anno Dominate", image: "/Ghost.jpg" },
      ],
      weapons: [
        { name: "M13", image: "/M13.jpg" },
        { name: "CX-9", image: "/CX-9.jpg" },
        { name: "QQ9", image: "/QQ9-cihuy.jpg" },
        { name: "AK117", image: "/AK117.jpg" },
      ],
    },
    {
      name: "Genshin Impact",
      stats: "Satou",
      logo: "/genshin_logo.jpg",
      year: 2021,
      characters: [{ name: "Hu Tao", image: "/hutao_chan.png" }],
    },
    {
      name: "Farlight 84",
      stats: "Bebantim",
      logo: "/Farlight84_logo.jpg",
      year: 2025,
      characters: [{ name: "Sunil", image: "/char_sunil.jpg" }],
      weapons: [
        { name: "AK77", image: "/ak77.jpg" },
        { name: "UMP99", image: "/ump99.jpg" },
      ],
    },
    {
      name: "Roblox",
      stats: "aghaindo9",
      logo: "/Roblox-logo.png",
      year: 2016,
      maps: [
        { name: "Brookhaven", image: "/brookhaven.jpg" },
        { name: "Blox Fruits", image: "/bloxfruits.jpg" },
      ],
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setAnimate(true);
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setModalImage(null), 300);
  };

  return (
    <div className="played-page">
      <h2 className="section-title">Played Games</h2>

      <ul className="games-list">
        {games.map((game, i) => (
          <li key={i} className="game-card" onClick={() => toggleDropdown(i)}>
            <div className="game-icon">
              <img src={game.logo} alt={game.name} />
            </div>
            <div className="game-text">
              <h3>{game.name}</h3>
              <p>{game.stats}</p>
            </div>
            <span className="year">{game.year}</span>

            {openIndex === i && (
              <div className="dropdown-info">
                <p>
                  <strong>Nickname:</strong> {game.stats}
                </p>

                {game.characters && (
                  <>
                    <h4>Characters</h4>
                    <div className="dropdown-images">
                      {game.characters.map((char, idx) => (
                        <div key={idx} className="dropdown-item">
                          <img
                            src={char.image}
                            alt={char.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(char.image);
                            }}
                          />
                          <p>{char.name}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {game.weapons && (
                  <>
                    <h4>Weapons</h4>
                    <div className="dropdown-images">
                      {game.weapons.map((wpn, idx) => (
                        <div key={idx} className="dropdown-item">
                          <img
                            src={wpn.image}
                            alt={wpn.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(wpn.image);
                            }}
                          />
                          <p>{wpn.name}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {game.maps && (
                  <>
                    <h4>Played Maps</h4>
                    <div className="dropdown-images">
                      {game.maps.map((map, idx) => (
                        <div key={idx} className="dropdown-item">
                          <img
                            src={map.image}
                            alt={map.name}
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(map.image);
                            }}
                          />
                          <p>{map.name}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            ×
          </span>
          <img
            src={modalImage}
            alt="Enlarged"
            className={`modal-content ${animate ? "zoom-in" : "zoom-out"}`}
          />
        </div>
      )}
    </div>
  );
};

export default PlayedGames;
