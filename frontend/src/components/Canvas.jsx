import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../services/api';

const Canvas = () => {
    const [pixels, setPixels] = useState({});

    // Fetch stored pixels from the backend
    useEffect(() => {
        axios.get(`${API_BASE_URL}/mouse`)
            .then((response) => {
                const data = response.data;
                const pixelData = {};
                data.forEach((event) => {
                    const key = `${event.x},${event.y}`;
                    pixelData[key] = event.count;
                });
                setPixels(pixelData);
            })
            .catch((error) => {
                console.error('Error fetching pixel data:', error);
            });
    }, []);

    // Handle mouse movement and send data to the backend
    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const key = `${x},${y}`;

        setPixels((prev) => ({
            ...prev,
            [key]: (prev[key] || 0) + 1,
        }));

        // Send the updated pixel data to the backend
        axios.post(`${API_BASE_URL}/mouse`, { x, y })
            .catch((error) => {
                console.error('Error sending pixel data:', error);
            });
    };

    // Clear the canvas
    const clearCanvas = () => {
        setPixels({});
    };

    return (
        <div>
            <button onClick={clearCanvas}>Clear Canvas</button>
            <div
                style={{
                    width: '800px',
                    height: '600px',
                    border: '1px solid black',
                    position: 'relative',
                    margin: '20px auto',
                }}
                onMouseMove={handleMouseMove}
            >
                {Object.entries(pixels).map(([key, count]) => {
                    const [x, y] = key.split(',').map(Number);
                    const color = `rgba(255, 0, 0, ${Math.min(count / 10, 1)})`;

                    return (
                        <div
                            key={key}
                            style={{
                                position: 'absolute',
                                left: x,
                                top: y,
                                width: '2px',
                                height: '2px',
                                backgroundColor: color,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Canvas;