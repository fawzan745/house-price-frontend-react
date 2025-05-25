import { index, layout } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout.jsx", [index("routes/home.jsx")]),
];
