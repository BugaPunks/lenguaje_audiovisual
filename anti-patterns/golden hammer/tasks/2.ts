class SimpleGraph {
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    // Se agregaron con el tiempo
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }

    // ... otras visualizaciones adaptadas.
}

//============SOLUCION=================//
interface Chart {
    draw(data: number[]): void;
}

class BarChart implements Chart {

    draw(data: number[]) {
        console.log("Drawing bar chart:", data);
    }

}

class PieChart implements Chart {

    draw(data: number[]) {
        console.log("Drawing pie chart:", data);
    }

}

class RadialChart implements Chart {
    draw(data: number[]) {
        console.log("Drawing radial chart:", data);
    }

}

class SimpleGraph {

    constructor(private chart: Chart) { }

    draw(data: number[]) {
        this.chart.draw(data);
    }
}