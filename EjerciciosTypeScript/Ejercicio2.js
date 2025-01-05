function createFrame(names) {
    const caracter = '*';
    const width = names.reduce((a, b) => (a.length > b.length ? a : b)).length + 4;
    const topBottom = caracter.repeat(width);
    const str = names.map(name => {
        const padding = ' '.repeat(width - name.length - 3);
        return `* ${name}${padding}*`;
    });
    const frame = [topBottom, ...str, topBottom].join('\n');

    return frame;
  }

 console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************