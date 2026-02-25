import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { join, basename, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, "../public/images/gallery");
const outputDir = join(__dirname, "../public/images/gallery/webp");

mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())
);

console.log(`Convertendo ${files.length} imagens para WebP...\n`);

let total = 0;
for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputFilename = basename(file, extname(file)) + ".webp";
    const outputPath = join(outputDir, outputFilename);

    await sharp(inputPath)
        .rotate()
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);

    const { size: inputSize } = (await import("fs")).statSync(inputPath);
    const { size: outputSize } = (await import("fs")).statSync(outputPath);
    const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);

    console.log(
        `✅ ${file} → ${outputFilename}  (${(inputSize / 1024 / 1024).toFixed(1)} MB → ${(outputSize / 1024).toFixed(0)} KB, -${reduction}%)`
    );
    total += inputSize - outputSize;
}

console.log(
    `\n🎉 Concluído! Economia total: ${(total / 1024 / 1024).toFixed(1)} MB`
);
