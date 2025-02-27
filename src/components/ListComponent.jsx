import { useState } from 'react';

const ListComponent = () => {
    const initialItems = [
        'Apple',
        'Banana',
        'Orange',
        'Strawberry',
        'Grape',
        'Pineapple',
        'Mango',
        'Kiwi'
    ];

    const [filterText, setFilterText] = useState('');

    const [items, setItems] = useState(initialItems);
    const [filteredItems, setFilteredItems] = useState(initialItems);

    const handleFilterChange = async (e) => {
        await setFilterText(e.target.value);
        
        await setFilteredItems(items.filter(item =>
            item.toLowerCase().includes(filterText.toLowerCase())
        ));
    };

    const handleItemChange = (index, newValue) => {
        const newItems = [...items];
        newItems[index] = newValue;
        setItems(newItems);
    };

    return (
        <div className="container mt-4">
            <h2>Lista Filtrável</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite para filtrar..."
                    value={filterText}
                    onChange={handleFilterChange}
                />
            </div>
            <ul className="list-group">
                {filteredItems.map((item, index) => (
                    <li key={index} className="list-group-item">
                        <input
                            type="text"
                            className="form-control"
                            value={item}
                            onChange={(e) => handleItemChange(items.indexOf(item), e.target.value)}
                        />
                    </li>
                ))}
            </ul>
            {filteredItems.length === 0 && (
                <p className="text-muted">Nenhum item encontrado</p>
            )}
        </div>
    );
};

export default ListComponent;