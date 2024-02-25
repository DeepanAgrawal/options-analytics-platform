import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import "./grid.css";

const OptionsGrid = ({ selectedCompany, data }: any) => {
  // Row Data: The data to be displayed.
  const [searchQuery, setSearchQuery] = useState("");
  const [rowData, setRowData] = useState(data);

  const combinedCellRenderer = (params: {
    data: {
      company: string;
      strikePrice: string;
      call_put: string;
      expiry: string;
    };
  }) => {
    const company = `${params.data.company} `;
    const strikePrice = `${params.data.strikePrice} `;
    const callPut = `${params.data.call_put}`;

    return `${company}${strikePrice}${callPut}`;
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: "Options",
      field: "company",
      flex: 1,
      cellClass: "align-left",
      sortable: false,
      cellRenderer: combinedCellRenderer,
    },
    {
      field: "expiry",
      flex: 1,
      cellClass: "align-left",
      sortable: false,
    },
    {
      headerName: "Market Price",
      field: "market_price",
      flex: 1,
      cellClass: "align-right",
      headerClass: "header-align-right",
      sortable: false,
    },
    {
      headerName: "OI",
      field: "oi",
      flex: 1,
      cellClass: "align-right",
      headerClass: "header-align-right",
    },
  ]);

  const gridOptions = {
    onCellClicked: (params: any) => {
      if (params.column.colId === "company") {
        // Handle click event here
        selectedCompany(params.data);
      }
    },
    onGridReady: (params: any) => {
      const gridApi = params.api;

      // Set initial width for a specific column
      gridApi.setColumnWidth("company", 200);
    },
    autoHeight: true,
  };

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = rowData.filter((item: any) =>
    item.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid-container">
      <div className="align-center">
        <h2>Watchlist</h2>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div
        className="ag-theme-quartz"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          gridOptions={gridOptions}
          rowData={filteredData}
          columnDefs={colDefs}
        />
      </div>
    </div>
  );
};

export default OptionsGrid;
