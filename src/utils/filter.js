// filepath: src/utils/filter.js
export function filterProducts(products, { searchTerm = '', category = '' }) {
  return products.filter((p) => {
    const matchesCategory = !category || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
