
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];

// Vérifier la validité d'un produit
function estValide(produit) {
  return (
    Number.isFinite(produit.prix) &&
    produit.prix >= 0 &&
    Number.isFinite(produit.stock) &&
    produit.stock >= 0
  );
}

// Vérifier les données
const produitsValides = produits.filter(estValide);

console.log("=== Catalogue des produits ===");

// 1. Afficher le catalogue
produitsValides.forEach(function (produit) {
  console.log(`${produit.nom} : ${produit.prix} MAD`);
});

// 2. Produits disponibles
const disponibles = produitsValides.filter(
  produit => produit.stock > 0
);

console.log("\n=== Produits disponibles ===");
disponibles.forEach(produit => console.log(produit.nom));
console.log("Nombre de produits disponibles :", disponibles.length);

// 3. Valeur totale du stock
const valeurStock = produitsValides.reduce(
  (total, produit) => total + produit.prix * produit.stock,
  0
);
console.log("\nValeur totale du stock :", valeurStock, "MAD");

// 4. Produit disponible le moins cher
if (disponibles.length > 0) {
  const moinsCher = disponibles.reduce((min, produit) =>
    produit.prix < min.prix ? produit : min
  );

  const { nom, prix } = moinsCher;
  console.log("Produit le moins cher :", nom, "-", prix, "MAD");
} else {
  console.log("Aucun produit disponible.");
}

// 5. Résumé avec map()
const resume = produitsValides.map(
  produit =>
    `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`
);

console.log("\n=== Résumé ===");
resume.forEach(ligne => console.log(ligne));
