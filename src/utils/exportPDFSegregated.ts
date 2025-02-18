import jsPDF from 'jspdf'
import 'jspdf-autotable'
import logo from '@/assets/img/logoGrupo.png'
import { PdfDoc, InventoryMovement } from './types'
import { ProductsExpiration, InterfaceEditEntry, InterfaceStorageSegregated } from '@/store/Segregated/types'


const loadLogoImg = async () => {
    const response = await fetch(logo);
    if (!response.ok) {
    }
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    return uint8Array;
};


export async function genereatePdfMovmentDetails(data: InterfaceEditEntry) {
    const doc = new jsPDF();

    let logoImg = await loadLogoImg();

    const addHeader = (logoImg: Uint8Array) => {
        doc.setLineWidth(0.5);
        doc.setDrawColor(0);
        doc.setFillColor(211, 211, 211);
        // const img = new Image();
        // img.src = logo;
        doc.addImage(logoImg, 'PNG', 8, 16, 70, 30);

        const contentX = 88;
        let contentY = 25;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text(data.identifier, contentX, contentY - 4);
        doc.setFontSize(9);
        doc.text("Observações:", contentX, contentY);
        doc.setFont("helvetica", "normal");
        doc.text(data.observation, contentX + 22, contentY);
        doc.setFont("helvetica", "bold");
        contentY += 5;
        doc.text("Criado Por:", contentX, contentY);
        doc.setFont("helvetica", "normal");
        doc.text(data.created_by, contentX + 18, contentY);

        doc.setFont("helvetica", "bold");
        contentY += 5;
        doc.text("Às:", contentX, contentY);
        doc.setFont("helvetica", "normal");
        doc.text(useFormat.asDateTime(data.created_at), contentX + 6, contentY);
        doc.setFont("helvetica", "bold");
        contentY += 5;
        doc.text("Status:", contentX, contentY);
        doc.setFont("helvetica", "normal");
        doc.text(data.status, contentX + 12, contentY);


        //EDITADO
        if (data?.updated_by) {
            doc.setFont("helvetica", "bold");
            contentY += 5;
            doc.text("Editado Por:", contentX, contentY);
            doc.setFont("helvetica", "normal");
            doc.text(String(data?.updated_by ?? ''), contentX + 21, contentY);
            doc.setFont("helvetica", "bold");
            contentY += 5;
            doc.text("Às:", contentX, contentY);
            doc.setFont("helvetica", "normal");
            doc.text(useFormat.asDateTime(new Date().toISOString()) ?? '', contentX + 6, contentY);
        }

        //RODAPÉ
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.text(`Gerado em: ${useFormat.asDateTime(new Date().toISOString())}`, 159, 295);

        return doc.internal.pageSize.height - 30;
    };

    const tableColumns = ['Produto', 'Fabricante', 'Cód.', 'Lote', 'Qtd.', 'Vencimento', 'Motivo'];

    try {

        const tableRows = ref(data.items.map((x) => {
            return [x.description, x.manufacturer, x.barcode, x.batch, x.amount, useFormat.asDate(x.expiration_date), x.motive];
        }));

        doc.autoTable({
            head: [tableColumns],
            body: tableRows.value,
            startY: 60,
            startX: 1,
            margin: { top: 60, left: 5, right: 5, bottom: 10 },
            didDrawPage: () => addHeader(logoImg),
            bodyStyles: { valign: 'top' },
            styles: {
                font: 'helvetica',
                fontStyle: 'normal',
                fontSize: 8,
                overflow: 'linebreak',
                lineColor: [252, 252, 252],
                lineWidth: 0.2,
            },
            headStyles: {
                halign: 'center',
                cellWidth: 'wrap',
                overflow: 'linebreak',
                fontStyle: 'bold',
                // fillColor: [211, 211, 211],
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            columnStyles: {
                0: { cellWidth: 45 },
                2: { halign: 'center' },
                4: { halign: 'center' },
                5: { halign: 'center' },
            },
            rowPageBreak: 'avoid',
            didParseCell: function (data) {
                if (typeof data.cell.styles.overflow === 'undefined') {
                    data.cell.styles.overflow = 'linebreak';
                }
            },
            willDrawCell: function (data) {
                const pageHeight = doc.internal.pageSize.height;
                const rowHeight = data.cell.height;
                const marginBottom = data.table.settings.margin.bottom || 0; // Usar settings.margin em vez de margin
                const remainingSpace = pageHeight - marginBottom - data.cursor.y;

                if (rowHeight > remainingSpace) {
                    doc.addPage();
                    data.cursor.y = data.table.settings.margin.top || 0; // Reinicia a posição y no topo da nova página
                }
            }
        });
        const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blobPDF);

        window.open(blobUrl);
    } catch (error) {
        console.error('Error loading logo or generating PDF:', error);
    }
    // doc.save(data.identifier);
}


export async function genereatePdfMovments(data: InventoryMovement[]) {
    const doc = new jsPDF()

    const logoImg: Uint8Array = await loadLogoImg()

    const addHeader = (logoImg: Uint8Array) => {
        doc.setLineWidth(0.5)
        doc.setDrawColor(0)
        doc.setFillColor(211, 211, 211)

        // const img = new Image()
        // img.src = logo
        doc.addImage(logoImg, 'PNG', 8, 16, 70, 30)

        const contentX = 90
        const contentY = 35

        doc.setFont("helvetica", "bold")
        doc.setFontSize(16)
        doc.text('Movimentos Estoque Segregado', contentX, contentY - 4)



        //RODAPÉ
        doc.setFontSize(8)
        doc.setFont("helvetica", "bold")
        doc.text(`Gerado em: ${useFormat.asDateTime(new Date().toISOString())}`, 159, 295)

        return doc.internal.pageSize.height - 30;
    };

    const tableColumns = ['Identificador', 'Filial Origem', 'Produtos Unicos', 'Prod. Totais', 'Criado Por', 'Status']

    try {

        const tableRows = ref(data.map((x) => {
            return [x.identifier, x.origin_branch, x.products, x.units, x.created_by, x.status]
        }))

        doc.autoTable({
            head: [tableColumns],
            body: tableRows.value,
            startY: 60,
            startX: 1,
            margin: { top: 60, left: 5, right: 5, bottom: 10 },
            didDrawPage: () => addHeader(logoImg),
            bodyStyles: { valign: 'top' },
            styles: {
                font: 'helvetica',
                fontStyle: 'normal',
                fontSize: 8,
                overflow: 'linebreak',
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            headStyles: {
                halign: 'center',
                cellWidth: 'wrap',
                overflow: 'linebreak',
                fontStyle: 'bold',
                // fillColor: [211, 211, 211],
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            columnStyles: {
                0: { cellWidth: 45 },
                2: { halign: 'center' },
                3: { halign: 'center' },
            },
            rowPageBreak: 'avoid',
            didParseCell: function (data) {
                if (typeof data.cell.styles.overflow === 'undefined') {
                    data.cell.styles.overflow = 'linebreak';
                }
            },
            willDrawCell: function (data) {
                const pageHeight = doc.internal.pageSize.height;
                const rowHeight = data.cell.height;
                const marginBottom = data.table.settings.margin.bottom || 0; // Usar settings.margin em vez de margin
                const remainingSpace = pageHeight - marginBottom - data.cursor.y;

                if (rowHeight > remainingSpace) {
                    doc.addPage();
                    data.cursor.y = data.table.settings.margin.top || 0; // Reinicia a posição y no topo da nova página
                }
            }
        });
        const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blobPDF);

        window.open(blobUrl);
        // doc.save('Mov. Entradas e saidas.pdf');
    } catch (error) {
        console.error('Error loading logo or generating PDF:', error);
    }
}


export async function genereatePdfSegregatedStock(data: InterfaceStorageSegregated[]) {
    const doc = new jsPDF()

    let logoImg = await loadLogoImg()

    const addHeader = (logoImg: Uint8Array) => {
        doc.setLineWidth(0.5)
        doc.setDrawColor(0)
        doc.setFillColor(211, 211, 211)

        // const img = new Image()
        // img.src = logo
        doc.addImage(logoImg, 'PNG', 8, 16, 70, 30)

        const contentX = 90
        const contentY = 35

        doc.setFont("helvetica", "bold")
        doc.setFontSize(16)
        doc.text('Estoque Segregado', contentX, contentY - 4)



        //RODAPÉ
        doc.setFontSize(8)
        doc.setFont("helvetica", "bold")
        doc.text(`Gerado em: ${useFormat.asDateTime(new Date().toISOString())}`, 159, 295)

        return doc.internal.pageSize.height - 30;
    };

    const tableColumns = ['Produto', 'Fabricante', 'EAN', 'Lote', 'Qtd.', 'Vencimento', 'Motivo', 'NF', 'Preço']


    try {
        const tableRows = ref(data.map((x) => {
            return [x.description, x.manufacturer, x.barcode, x.batch, x.amount, useFormat.asDate(x.expiration_date), x.motive, x.nf, useFormat.asMonetary(x.price)]
        }))
        doc.autoTable({
            head: [tableColumns],
            body: tableRows.value,
            startY: 60,
            startX: 1,
            margin: { top: 60, left: 5, right: 5, bottom: 10 },
            didDrawPage: () => addHeader(logoImg),
            bodyStyles: { valign: 'top' },
            styles: {
                font: 'helvetica',
                fontStyle: 'normal',
                fontSize: 8,
                overflow: 'linebreak',
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            headStyles: {
                halign: 'center',
                cellWidth: 'wrap',
                overflow: 'linebreak',
                fontStyle: 'bold',
                // fillColor: [211, 211, 211],
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            columnStyles: {
                0: { cellWidth: 45 },
                4: { halign: 'center' },
                8: { cellWidth: 20, halign: 'center' },
            },
            rowPageBreak: 'avoid',
            didParseCell: function (data) {
                if (typeof data.cell.styles.overflow === 'undefined') {
                    data.cell.styles.overflow = 'linebreak';
                }
            },
            willDrawCell: function (data) {
                const pageHeight = doc.internal.pageSize.height;
                const rowHeight = data.cell.height;
                const marginBottom = data.table.settings.margin.bottom || 0; // Usar settings.margin em vez de margin
                const remainingSpace = pageHeight - marginBottom - data.cursor.y;

                if (rowHeight > remainingSpace) {
                    doc.addPage();
                    data.cursor.y = data.table.settings.margin.top || 0; // Reinicia a posição y no topo da nova página
                }
            }
        });

        const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blobPDF);

        window.open(blobUrl);
    } catch (error) {
        console.error('Error loading logo or generating PDF:', error);
    }
    // doc.save('Est. Prod. Segregados.pdf');
}


export async function generatePdfSegregatedDashboard(data) {
    const doc = new jsPDF();
    let logoImg = await loadLogoImg();

    const addHeader = (logoImg: Uint8Array) => {
        doc.setLineWidth(0.5);
        doc.setDrawColor(0);
        doc.setFillColor(211, 211, 211);

        // Adiciona a imagem do logo
        doc.addImage(logoImg, 'PNG', 8, 16, 70, 30);

        const contentX = 90;
        const contentY = 35;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text('Lotes no centro de distribuição à vencer', contentX, contentY - 4);

        // Rodapé
        doc.setFontSize(8);
        doc.setFont("helvetica", "bold");
        doc.text(`Gerado em: ${useFormat.asDateTime(new Date().toISOString())}`, 159, 295);

        return doc.internal.pageSize.height - 30;
    };

    const tableColumns = ['Cód', 'Produto', 'Fabricante', 'EAN', 'Lote', 'Qtd.', 'Vencimento', 'Preço'];

    try {
        const tableRows = data.map((x) => {
            return [
                x.id.toString(),
                x.description,
                x.manufacturer,
                x.barcode,
                x.batch,
                x.amount.toString(),
                useFormat.asDate(x.expiration_date),
                useFormat.asMonetary(x.price)
            ];
        });

        doc.autoTable({
            head: [tableColumns],
            body: tableRows,
            startY: 60,
            margin: { top: 60, left: 5, right: 5, bottom: 10 },
            didDrawPage: () => addHeader(logoImg),
            bodyStyles: { valign: 'top' },
            styles: {
                font: 'helvetica',
                fontStyle: 'normal',
                fontSize: 8,
                overflow: 'linebreak',
                lineColor: [252, 252, 252],
                lineWidth: 0.3
            },
            headStyles: {
                halign: 'center',
                cellWidth: 'wrap',
                overflow: 'linebreak',
                fontStyle: 'bold',
                lineColor: [252, 252, 252],
                lineWidth: 0.3,
            },
            columnStyles: {
                0: { cellWidth: 15 },
                3: { cellWidth: 24, halign: 'center' },
                5: { cellWidth: 20, halign: 'center' },
                7: { cellWidth: 20, halign: 'center' },
            },
            rowPageBreak: 'avoid',
            didParseCell: function (data) {
                if (typeof data.cell.styles.overflow === 'undefined') {
                    data.cell.styles.overflow = 'linebreak';
                }
            },
            willDrawCell: function (data) {
                const pageHeight = doc.internal.pageSize.height;
                const rowHeight = data.cell.height;
                const marginBottom = data.table.settings.margin.bottom || 0; // Usar settings.margin em vez de margin
                const remainingSpace = pageHeight - marginBottom - data.cursor.y;

                if (rowHeight > remainingSpace) {
                    doc.addPage();
                    data.cursor.y = data.table.settings.margin.top || 0; // Reinicia a posição y no topo da nova página
                }
            }
        });

        const blobPDF = new Blob([doc.output('blob')], { type: 'application/pdf' });
        const blobUrl = URL.createObjectURL(blobPDF);

        window.open(blobUrl);

    } catch (error) {
        console.error('Errou:', error);
    }
}
