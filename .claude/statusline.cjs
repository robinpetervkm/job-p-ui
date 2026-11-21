#!/usr/bin/env node

const fs = require('fs');

try {
  const inputData = fs.readFileSync(0, 'utf-8');
  const data = JSON.parse(inputData);

  const modelName = data?.model?.display_name || 'Unknown Model';
  const usedPercentage = data?.context_window?.used_percentage;

  let output = ` ${modelName}`;

  if (usedPercentage !== undefined && usedPercentage !== null) {
    const barWidth = 20;
    const filled = Math.round((usedPercentage * barWidth) / 100);
    const empty = barWidth - filled;
    const bar = '█'.repeat(Math.max(0, filled)) + '░'.repeat(Math.max(0, empty));
    output += ` | [${bar}] ${usedPercentage}%`;
  }

  process.stdout.write(output);
} catch (e) {
  process.stdout.write(' Claude Code');
}
