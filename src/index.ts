// Re-export the server and its types
export { createServer } from "./mcp.js";
export type { SimplifiedDesign } from "./services/simplify-node-response.js";
export type { FigmaService } from "./services/figma.js";
export { getServerConfig } from "./config.js";
export { startServer } from "./cli.js";

// Export image conversion utilities
export { convertImagesToWebp } from "./utils/imageConverter.js";
export type { ConvertToWebpOptions } from "./utils/imageConverter.js";
