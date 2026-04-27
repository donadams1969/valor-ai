const fs = require('fs');

const pageFile = 'valor-ai-engine/app/page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

// Replace dynamic class names with a map
const colorMapReplacement = `const colorMap = {
  success: { text: "text-green-400" },
  error: { text: "text-red-400" },
  warning: { text: "text-yellow-400" },
  info: { text: "text-blue-300" },
}`;

content = content.replace('export default function ValorAiEngine() {', `${colorMapReplacement}

export default function ValorAiEngine() {`);

content = content.replace(
  /log\.type === "success" && "text-green-400",\s*log\.type === "error" && "text-red-400",\s*log\.type === "warning" && "text-yellow-400",\s*log\.type === "info" && "text-blue-300",/,
  `colorMap[log.type].text,`
);

fs.writeFileSync(pageFile, content);
