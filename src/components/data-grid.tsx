import React, { useCallback, useMemo } from "react";
import DataEditor, {
  GridCell,
  GridCellKind,
  Item,
} from "@glideapps/glide-data-grid";
import "@glideapps/glide-data-grid/dist/index.css";

// 模拟从 Tauri 后端 Rust 调用的逻辑
const DataGrid = () => {
  const columns = useMemo(
    () => [
      { title: "ID", width: 100 },
      { title: "名称", width: 200 },
      { title: "公式结果", width: 150 },
    ],
    [],
  );

  // 关键：对接你的 Rust 后端
  const getCellContent = useCallback(([col, row]: Item): GridCell => {
    // 这里未来会通过 invoke("fetch_cell_data", { col, row }) 异步获取
    // 既然你是 PAX 布局，你可以批量请求整列的 Buffer
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      displayData: `R${row} C${col}`, // 演示数据
      data: `R${row} C${col}`,
    };
  }, []);

  return (
    <DataEditor
      width="100%"
      height="100%"
      getCellContent={getCellContent}
      columns={columns}
      rows={1000} // 这里对接你后端返回的总行数
    />
  );
};

export default DataGrid;
