//resize nav
let startX;
    let startWidth;

    document.querySelector(".west").addEventListener("mousedown", function (e) {
      startX = e.clientX;
      startWidth = parseFloat(getComputedStyle(this).width);
      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    });

    function resize(e) {
      const diffX = e.clientX - startX;
      const newWidth = startWidth + diffX;
      document.querySelector(".west").style.width = newWidth + "px";
    }

    function stopResize() {
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
    }



//toast grid
    const grid = new tui.Grid({
        el: document.getElementById('grid'),
        data: treeData,
        rowHeaders: ['checkbox'],
        bodyHeight: 500,
        treeColumnOptions: {
          name: 'name',
          useCascadingCheckbox: true
        },
        columns: [
          {
            header: 'Name',
            name: 'name',
            width: 300
          },
          {
            header: 'Artist',
            name: 'artist'
          },
          {
            header: 'Type',
            name: 'type'
          },
          {
            header: 'Release',
            name: 'release'
          },
          {
            header: 'Genre',
            name: 'genre'
          }
        ]
      });
  
      grid.on('expand', ev => {
        const { rowKey } = ev;
        const descendantRows = grid.getDescendantRows(rowKey);
  
        console.log('rowKey: ' + rowKey);
        console.log('descendantRows: ' + descendantRows);
  
        if (!descendantRows.length) {
          grid.appendRow(
            {
              name: 'dynamic loading data',
              _children: [
                {
                  name: 'leaf row'
                },
                {
                  name: 'internal row',
                  _children: []
                }
              ]
            },
            { parentRowKey: rowKey }
          );
        }
      });
  
      grid.on('collapse', ev => {
        const { rowKey } = ev;
        const descendantRows = grid.getDescendantRows(rowKey);
  
        console.log('rowKey: ' + rowKey);
        console.log('descendantRows: ' + descendantRows);
      });