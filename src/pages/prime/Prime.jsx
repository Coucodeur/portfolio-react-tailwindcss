import React, { useState, useEffect } from "react";
import { Trash2, Edit, Star, AlertTriangle } from "lucide-react";

const Vendeur = ({
  nom,
  jobsFactures,
  joursTravailles,
  onIncrementerJobsFactures,
  onHandleJoursTravaillesChange,
  onSupprimerVendeur,
  bonus,
  onModifierVendeur,
  onToggleBonus,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nouveauNom, setNouveauNom] = useState(nom);

  const calculerPrime = (jobsFactures, joursTravailles, bonus) => {
    const ratio = joursTravailles > 0 ? jobsFactures / joursTravailles : 0;
    let primeParJob = 0;

    if (ratio >= 3) {
      primeParJob = 40;
    } else if (ratio >= 2.5) {
      primeParJob = 30;
    } else if (ratio >= 2) {
      primeParJob = 20;
    } else if (ratio >= 1.75) {
      primeParJob = 15;
    } else if (ratio >= 1) {
      primeParJob = 10;
    } else {
      primeParJob = 0; // Ou une autre valeur par défaut si le ratio est inférieur à 1
    }
    let prime = jobsFactures * primeParJob;
    if (bonus) {
      prime *= 1.2; // Ajoute 20% si bonus est true
    }
    return prime;
  };

  const calculerRatio = (jobsFactures, joursTravailles) => {
    return joursTravailles > 0 ? (jobsFactures / joursTravailles).toFixed(2) : "0.00";
  };

  const prime = calculerPrime(jobsFactures, joursTravailles, bonus);

  const handleModifierNom = () => {
    if (nouveauNom.trim() !== "" && nouveauNom.trim() !== nom) {
      onModifierVendeur(nom, nouveauNom.trim());
      setIsEditing(false);
    } else if (nouveauNom.trim() === nom) {
      setIsEditing(false);
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 space-y-4 flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        {isEditing ? (
          <>
            <input
              value={nouveauNom}
              onChange={(e) => setNouveauNom(e.target.value)}
              className="w-3/4 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              variant="ghost"
              size="icon"
              onClick={handleModifierNom}
              className="text-green-500 hover:text-green-700 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.6 8.9l-3.8 3.8l1.1 3.1l3.8-3.8l7.3-7.3l-3-3zM8.6 12.8l-1.1-3.1l6.3-6.3l3 3l-6.3 6.3zM22 21h-8v-2h8v2zM12 7.8l1.6-1.6l6.4 6.4l-1.6 1.6z"
                />
              </svg>
            </button>
            <button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsEditing(false);
                setNouveauNom(nom);
              }}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{nom}</h2>
            <div className="flex gap-2">
              <button
                variant="ghost"
                size="icon"
                onClick={() => setIsEditing(true)}
                className="text-blue-500 hover:text-blue-700 p-2 rounded-full"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                variant="ghost"
                size="icon"
                onClick={() => onSupprimerVendeur(nom)}
                className="text-red-500 hover:text-red-700 p-2 rounded-full"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="w-full">
        <label
          htmlFor={`jobsFactures-${nom}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Jobs Facturés
        </label>
        <input
          id={`jobsFactures-${nom}`}
          type="number"
          value={jobsFactures}
          onChange={(e) => onIncrementerJobsFactures(nom, e.target.value)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor={`joursTravailles-${nom}`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Jours travaillés
        </label>
        <input
          id={`joursTravailles-${nom}`}
          type="number"
          value={joursTravailles}
          onChange={(e) => onHandleJoursTravaillesChange(nom, e.target.value)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
          max="31"
        />
      </div>
      <div
        className={`text-xl font-bold text-gray-700 dark:text-white ${
          bonus ? "text-blue-500 dark:text-blue-400" : ""
        }`}
      >
        Prime : {calculerPrime(jobsFactures, joursTravailles, bonus)} €
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={`bonus-${nom}`}
          checked={bonus}
          onChange={() => onToggleBonus(nom)}
          className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ${
            bonus ? "border-blue-500" : ""
          }`}
        />
        <label
          htmlFor={`bonus-${nom}`}
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            bonus ? "text-blue-500 dark:text-blue-400" : ""
          }`}
        >
          Bonus +20%
        </label>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Ratio : {calculerRatio(jobsFactures, joursTravailles)}
      </div>
    </div>
  );
};

const Manager = ({
  vendeurs,
  joursTravaillesManager,
  capturesManager,
  onJoursTravaillesManagerChange,
  onCapturesManagerChange,
}) => {
  const calculerTotalCaptures = (vendeurs, capturesManager) => {
    return (
      Object.values(vendeurs).reduce(
        (total, vendeur) => total + vendeur.jobsFactures,
        0
      ) + capturesManager
    );
  };

  const calculerTotalJoursTravailles = (vendeurs, joursTravaillesManager) => {
    return (
      Object.values(vendeurs).reduce(
        (total, vendeur) => total + vendeur.joursTravailles,
        0
      ) + joursTravaillesManager
    );
  };

  const calculerRatioEquipe = (vendeurs, joursTravaillesManager, capturesManager) => {
    const totalCaptures = calculerTotalCaptures(vendeurs, capturesManager);
    const totalJoursTravailles = calculerTotalJoursTravailles(
      vendeurs,
      joursTravaillesManager
    );
    return totalJoursTravailles > 0
      ? (totalCaptures / totalJoursTravailles).toFixed(2)
      : "0.00";
  };

  const calculerPrimeManager = (totalCaptures, ratioEquipe) => {
    let prime = 0;
    if (totalCaptures < 99) {
      prime = 0;
    } else if (totalCaptures >= 99 && totalCaptures < 120) {
      prime = totalCaptures * 5;
    } else if (totalCaptures >= 120 && totalCaptures < 150) {
      prime = totalCaptures * 10;
    } else if (totalCaptures >= 150 && totalCaptures <= 210) {
      prime = totalCaptures * 15;
    }

    if (ratioEquipe > 2) {
      prime *= 1.5;
    }
    return prime;
  };

  const totalCaptures = calculerTotalCaptures(vendeurs, capturesManager);
  const totalJoursTravailles = calculerTotalJoursTravailles(
    vendeurs,
    joursTravaillesManager
  );
  const ratioEquipe = calculerRatioEquipe(
    vendeurs,
    joursTravaillesManager,
    capturesManager
  );
  const prime = calculerPrimeManager(totalCaptures, ratioEquipe);
  const primeBonus = prime * 1.2;
  const primeMalus = prime * 0.8;

  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Prime Manager pour 3 BU
      </h2>
      <div className="mb-4 w-full sm:w-auto">
        <label
          htmlFor="joursTravaillesManager"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Jours Manager
        </label>
        <input
          id="joursTravaillesManager"
          type="number"
          value={joursTravaillesManager}
          onChange={(e) => onJoursTravaillesManagerChange(parseInt(e.target.value) || 0)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
        />
      </div>
      <div className="mb-4 w-full sm:w-auto">
        <label
          htmlFor="capturesManager"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Jobs Facturés Manager
        </label>
        <input
          id="capturesManager"
          type="number"
          value={capturesManager}
          onChange={(e) => onCapturesManagerChange(parseInt(e.target.value) || 0)}
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          min="0"
        />
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Total Jobs Facturés : {totalCaptures}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Total Jours Travaillés : {totalJoursTravailles}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Ratio Equipe : {ratioEquipe}
      </p>
      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
        Prime : {prime} €
      </p>
      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Si Bonus: {primeBonus} €
      </p>
      <p className="text-xl font-bold text-red-600 dark:text-red-400">
        Si Malus: {primeMalus} €
      </p>
    </div>
  );
};

const CompteurDeCaptures = () => {
  const [vendeurs, setVendeurs] = useState(() => {
    if (typeof window !== "undefined") {
      const savedVendeurs = localStorage.getItem("vendeurs");
      return savedVendeurs ? JSON.parse(savedVendeurs) : {};
    }
    return {};
  });
  const [nouveauVendeur, setNouveauVendeur] = useState("");
  const [joursTravaillesManager, setJoursTravaillesManager] = useState(() => {
    if (typeof window !== "undefined") {
      const savedJoursTravaillesManager = localStorage.getItem("joursTravaillesManager");
      return savedJoursTravaillesManager ? parseInt(savedJoursTravaillesManager, 10) : 0;
    }
    return 0;
  });
  const [capturesManager, setCapturesManager] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCapturesManager = localStorage.getItem("capturesManager");
      return savedCapturesManager ? parseInt(savedCapturesManager, 10) : 0;
    }
    return 0;
  });
  const [bonusVendeur, setBonusVendeur] = useState(null);
  const [codeEntre, setCodeEntre] = useState("");
  const [afficherCalculateur, setAfficherCalculateur] = useState(false);
  const [isFavoris, setIsFavoris] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("calculateurDePrimesFavori") === "true";
    }
    return false;
  });
  const [codeIncorrect, setCodeIncorrect] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("vendeurs", JSON.stringify(vendeurs));
      localStorage.setItem("joursTravaillesManager", joursTravaillesManager.toString());
      localStorage.setItem("capturesManager", capturesManager.toString());
      localStorage.setItem("calculateurDePrimesFavori", isFavoris.toString());
    }
  }, [vendeurs, joursTravaillesManager, capturesManager, isFavoris]);

  const incrementerJobsFactures = (vendeur, value) => {
    const jobsFactures = parseInt(value, 10);
    setVendeurs((prevVendeurs) => ({
      ...prevVendeurs,
      [vendeur]: {
        ...prevVendeurs[vendeur],
        jobsFactures: isNaN(jobsFactures) ? 0 : jobsFactures,
      },
    }));
  };

  const handleJoursTravaillesChange = (vendeur, value) => {
    const jours = parseInt(value, 10);
    setVendeurs((prevVendeurs) => ({
      ...prevVendeurs,
      [vendeur]: {
        ...prevVendeurs[vendeur],
        joursTravailles: isNaN(jours) ? 0 : jours,
      },
    }));
  };

  const ajouterVendeur = () => {
    if (nouveauVendeur.trim() !== "" && !vendeurs.hasOwnProperty(nouveauVendeur.trim())) {
      setVendeurs((prevVendeurs) => ({
        ...prevVendeurs,
        [nouveauVendeur.trim()]: { jobsFactures: 0, joursTravailles: 0, bonus: false },
      }));
      setNouveauVendeur("");
    }
  };

  const supprimerVendeur = (vendeurASupprimer) => {
    const nouveauVendeurs = { ...vendeurs };
    delete nouveauVendeurs[vendeurASupprimer];
    setVendeurs(nouveauVendeurs);
  };

  const toggleBonus = (vendeurNom) => {
    setVendeurs((prevVendeurs) => ({
      ...prevVendeurs,
      [vendeurNom]: {
        ...prevVendeurs[vendeurNom],
        bonus: !prevVendeurs[vendeurNom].bonus,
      },
    }));
  };

  const verifierCode = () => {
    if (codeEntre === "55668899") {
      setAfficherCalculateur(true);
      setCodeIncorrect(false);
    } else {
      setCodeIncorrect(true);
      setCodeEntre("");
    }
  };

  const modifierVendeur = (ancienNom, nouveauNom) => {
    setVendeurs((prevVendeurs) => {
      const nouveauVendeurs = { ...prevVendeurs };
      if (nouveauVendeurs[ancienNom]) {
        nouveauVendeurs[nouveauNom] = nouveauVendeurs[ancienNom];
        delete nouveauVendeurs[ancienNom];
      }
      return nouveauVendeurs;
    });
  };

  const handleFavorisClick = () => {
    setIsFavoris(!isFavoris);
  };

  return (
    <div className="p-4 space-y-6 bg-[#24A183]/10 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Calculateur primes
        </h1>
        <button
          variant="ghost"
          size="icon"
          onClick={handleFavorisClick}
          className={
            isFavoris
              ? "rounded-full p-2 text-yellow-500 hover:text-yellow-400"
              : "rounded-full p-2 text-gray-500 hover:text-yellow-500"
          }
          title={isFavoris ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Star className="h-6 w-6" />
        </button>
      </div>
      {!afficherCalculateur && (
        <div className="space-y-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Entrez le code d'accès"
            value={codeEntre}
            onChange={(e) => setCodeEntre(e.target.value)}
            className={`w-full sm:w-auto px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
              codeIncorrect ? "border-red-500" : ""
            }`}
          />
          <button
            onClick={verifierCode}
            className="w-full sm:w-auto bg-[#24A183] hover:bg-teal-700 text-white px-6 py-2 rounded-md"
          >
            Accéder au calculateur
          </button>
          {codeIncorrect && (
            <div className="flex items-center gap-2 text-red-500 text-sm">
              <AlertTriangle className="h-4 w-4" />
              Code incorrect. Veuillez réessayer.
            </div>
          )}
        </div>
      )}

      {afficherCalculateur && (
        <>
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Nom du vendeur"
              value={nouveauVendeur}
              onChange={(e) => setNouveauVendeur(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  ajouterVendeur();
                }
              }}
            />
            <button
              onClick={ajouterVendeur}
              className="w-full sm:w-auto bg-[#24A183] hover:bg-teal-700 text-white px-6 py-2 rounded-md"
            >
              Ajouter
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(vendeurs).map(
              ([nom, { jobsFactures, joursTravailles, bonus }]) => (
                <div key={nom}>
                  <Vendeur
                    nom={nom}
                    jobsFactures={jobsFactures}
                    joursTravailles={joursTravailles}
                    onIncrementerJobsFactures={(vendeur, value) =>
                      incrementerJobsFactures(vendeur, value)
                    }
                    onHandleJoursTravaillesChange={(vendeur, value) =>
                      handleJoursTravaillesChange(vendeur, value)
                    }
                    onSupprimerVendeur={supprimerVendeur}
                    bonus={bonus}
                    onModifierVendeur={modifierVendeur}
                    onToggleBonus={() => toggleBonus(nom)}
                  />
                </div>
              )
            )}
          </div>
          {Object.keys(vendeurs).length > 0 && (
            <Manager
              vendeurs={vendeurs}
              joursTravaillesManager={joursTravaillesManager}
              capturesManager={capturesManager}
              onJoursTravaillesManagerChange={setJoursTravaillesManager}
              onCapturesManagerChange={setCapturesManager}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CompteurDeCaptures;
