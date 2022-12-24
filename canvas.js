function drawGraph() {
    let numSamples = Math.min(data.length, width);
    let numLines = numSamples - 1;

    let samples = resample(
        data, 
        numSamples,
        startY + height - 1, 
        startY,
        yMin,
        yMax
    );

    let xSpread = width / numLines;

    ctx.beginPath();

    for(let i = 0; i < numLines; ++i) {
        let v0 = samples[i];
        let v1 = samples[i + 1];

        let x0 = startX + (i * xSpread);
        let x1 = x0 + xSpread;

        ctx.moveTo(x0, v0);
        ctx.lineTo(x1, v1);
    }

    ctx.stroke();
}