import React, { useState } from 'react';

interface CheckedItems {
    [key: string]: boolean;
}

interface ShoppingItem {
    id: string;
    emoji: string;
    item: string;
    you: string;
    spouse: string;
    category: string;
}

const ShoppingList = () => {
    const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const items: ShoppingItem[] = [
        { id: 'frango-voce', emoji: '🍗', item: 'Peito de Frango', you: '1,2kg', spouse: '-', category: 'Proteínas' },
        { id: 'patinho-voce', emoji: '🥩', item: 'Patinho', you: '800g', spouse: '1,1kg', category: 'Proteínas' },
        { id: 'arroz', emoji: '🍚', item: 'Arroz', you: '2,1kg', spouse: '850g', category: 'Carboidratos' },
        { id: 'azeite', emoji: '🫒', item: 'Azeite', you: '300ml', spouse: '-', category: 'Temperos' },
        { id: 'feijao', emoji: '🫘', item: 'Feijão', you: '-', spouse: '650g', category: 'Carboidratos' },
        { id: 'legumes', emoji: '🥦', item: 'Legumes Variados', you: '-', spouse: '1kg', category: 'Vegetais' },
        { id: 'laranja', emoji: '🍊', item: 'Laranjas/Kiwis', you: '14 unid', spouse: '-', category: 'Frutas' },
        { id: 'banana', emoji: '🍌', item: 'Bananas', you: '14 unid', spouse: '-', category: 'Frutas' },
        { id: 'maca', emoji: '🍎', item: 'Maçãs', you: '14 unid', spouse: '-', category: 'Frutas' },
        { id: 'uva', emoji: '🍇', item: 'Uvas', you: '700g', spouse: '-', category: 'Frutas' },
        { id: 'proteina', emoji: '💪', item: 'Proteína de Ervilha', you: '14 scoops', spouse: '-', category: 'Suplementos' }
    ];

    const categories = [...new Set(items.map(item => item.category))];

    type VegetableInfo = [string, string];
    const vegetablesList: VegetableInfo[] = [
        ['🥦', 'Brócolis - 200g'],
        ['🥕', 'Cenoura - 200g'],
        ['🥦', 'Couve-flor - 200g'],
        ['🫑', 'Pimentão - 100g'],
        ['🧅', 'Cebola - 100g'],
        ['🥒', 'Abobrinha - 100g'],
        ['🍅', 'Tomate - 100g']
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl">🛒</span>
                    <h1 className="text-2xl font-bold">Lista de Compras Meal Prep</h1>
                </div>

                {categories.map(category => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-600">{category}</h3>
                        <div className="divide-y divide-gray-100">
                            {items
                                .filter(item => item.category === category)
                                .map(({ id, emoji, item: name, you, spouse }) => (
                                    <div key={id} className="py-2 flex items-center gap-4 hover:bg-gray-50 rounded-lg px-2">
                                        <input
                                            type="checkbox"
                                            id={id}
                                            checked={checkedItems[id] || false}
                                            onChange={() => toggleItem(id)}
                                            className="w-5 h-5 rounded border-gray-300 focus:ring-purple-500"
                                        />
                                        <span className="text-xl" role="img" aria-label={name}>
                      {emoji}
                    </span>
                                        <div className="flex-1">
                                            <label
                                                htmlFor={id}
                                                className={`font-medium ${checkedItems[id] ? 'line-through text-gray-400' : ''}`}
                                            >
                                                {name}
                                            </label>
                                            <div className="text-sm text-gray-500">
                                                {you !== '-' && <span>Você: {you}</span>}
                                                {you !== '-' && spouse !== '-' && <span className="mx-2">|</span>}
                                                {spouse !== '-' && <span>Esposa: {spouse}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🥬</span> Dicas para os Legumes Variados
                </h3>
                <ul className="space-y-1 text-gray-600">
                    {vegetablesList.map(([emoji, text]) => (
                        <li key={text} className="flex items-center gap-2">
                            <span>{emoji}</span> {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShoppingList;