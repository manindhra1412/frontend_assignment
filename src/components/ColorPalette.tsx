"use client";
import { useState } from 'react';

const ColorPalette = () => {
    const [colors, setColors] = useState<string[]>([
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1',
        '#A133FF', '#33FFF3', '#FFD433', '#FF8333'
    ]);

    const handleColorChange = (index: number, newColor: string) => {
        const newColors = [...colors];
        newColors[index] = newColor;
        setColors(newColors);
    };

    const handleDragStart = (index: number) => (event: React.DragEvent) => {
        event.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDrop = (index: number) => (event: React.DragEvent) => {
        event.preventDefault();
        const draggedIndex = parseInt(event.dataTransfer.getData('text/plain'));
        const newColors = [...colors];
        const [draggedColor] = newColors.splice(draggedIndex, 1);
        newColors.splice(index, 0, draggedColor);
        setColors(newColors);
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Color Palette</h1>
            <div className="flex space-x-4">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                        draggable
                        onDragStart={handleDragStart(index)}
                        onDrop={handleDrop(index)}
                        onDragOver={handleDragOver}
                    >
                        <div
                            className="w-16 h-16 rounded-full mb-2"
                            style={{ backgroundColor: color }}
                        ></div>
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;
