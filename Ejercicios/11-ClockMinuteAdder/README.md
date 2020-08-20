


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Clock Minute Adder</h1>

<div>
<p align='center'>Dada una hora en string en formato HH:MM, y un numero de minutos, devolver la nueva hora pasado esos minutos. El reloj es de 12 horas y tiene que devolverse en el formato HH:MM. Recuerda que no existe las 00hs</p>

<br/>
<br/>
<h2> Ejemplos: </h2>
<pre><code>
clockMinuteAdder('09:00', 20); // '09:20'
clockMinuteAdder('01:30', 30); // '02:00'
clockMinuteAdder('12:05', 100); // '01:45'
</code></pre>
<br/>
<br/>
<h1> Solución </h1>
<pre><code>
const clockMinuteAdder = (time, minutesToAdd) => {
    // Separo las horas y los minutos
    const [hours, minutes] = time.split(':');

    // agrego el total de minutos y el total de horas
    const totalMinutes = (minutesToAdd + parseInt(minutes));
    const totalHours = Math.floor(totalMinutes/60) + parseInt(hours);

    // saco las nuevas horas y minutos
    const newHours = ((totalHours - 1) % 12) + 1 ; // para que no quede 0hrs
    const newMinutes = totalMinutes % 60;

    // le agrego formato de ceros adelante si es necesario
    const formatHours = newHours > 9 ? newHours : `0${newHours}`;
    const formatMinutes = newMinutes > 9 ? newMinutes : `0${newMinutes}`;

    //devuelvo la nueva hora
    return `${formatHours}:${formatMinutes}`;
};
</code></pre>
<br/>
