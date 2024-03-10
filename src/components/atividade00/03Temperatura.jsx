export const Temperatura = ({ tempC, tempF, tempK }) => {
  
    function celsiusParaFahrenheit(c) {
        return (c * 9/5) + 32;
    }

    function fahrenheitParaCelsius(f) {
        return (f - 32) * 5/9;
    }

    function kelvin(k) {
        const c = k - 273.15;
        const f = celsiusParaFahrenheit(c);
        return {
            c, 
            f
        };
    }
    
    return (
        <div>
            <h1>{tempC}°C em Fahrenheit é {celsiusParaFahrenheit(tempC).toFixed(1)}°F</h1>
            <h1>{tempF}°F em Celsius é {fahrenheitParaCelsius(tempF).toFixed(1)}°C</h1>
            <h1>{tempK}K em Celsius é {kelvin(tempK).c.toFixed(1)}°C e em Fahrenheit é {kelvin(tempK).f.toFixed(1)}°F</h1>
        </div>
    )
}