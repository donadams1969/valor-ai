#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { Rev37Importer } from './rev37-importer';
import { Rev37Linker } from './rev37-linker';

function printHelp() {
    console.log(`
Jules Verification Suite - REV_37 Importer

Usage:
  import-rev37 --report <path> --node <node_name> --manifest <manifest_id> --output <path>

Options:
  --report    Path to the raw narrative report (e.g. telemetry inventory).
  --node      The origin node (e.g., 'SAINT PAUL 55116').
  --manifest  The manifest ID to link this snapshot to.
  --output    Path to write the verifier-compatible output JSON.
`);
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        printHelp();
        process.exit(0);
    }

    let reportPath = '';
    let nodeName = '';
    let manifestId = '';
    let outputPath = '';

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--report') reportPath = args[++i];
        if (args[i] === '--node') nodeName = args[++i];
        if (args[i] === '--manifest') manifestId = args[++i];
        if (args[i] === '--output') outputPath = args[++i];
    }

    if (!reportPath || !nodeName || !manifestId || !outputPath) {
        console.error("Error: Missing required arguments.\n");
        printHelp();
        process.exit(1);
    }

    try {
        const rawReport = readFileSync(reportPath, 'utf8');

        console.log(`Importing REV_37 report from: ${reportPath}`);
        const importer = new Rev37Importer();
        const snapshot = importer.parse(rawReport, nodeName);

        console.log(`Linking to manifest: ${manifestId}`);
        const linker = new Rev37Linker();
        const verifierOutput = linker.linkToManifest(snapshot, manifestId);

        writeFileSync(outputPath, JSON.stringify(verifierOutput, null, 2));
        console.log(`Success! Verifier-compatible output written to: ${outputPath}`);
        console.log(`Snapshot Hash: ${verifierOutput.snapshotHash}`);
    } catch (err) {
        console.error("Fatal Error during import:", err);
        process.exit(1);
    }
}

main();
