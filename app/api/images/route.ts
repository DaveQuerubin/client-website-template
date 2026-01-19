import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'client1/HeroImage';

    const imagesDir = path.join(process.cwd(), 'public', folder);

    // Check if directory exists
    if (!fs.existsSync(imagesDir)) {
      return NextResponse.json({ images: [] });
    }

    // Read directory contents
    const files = fs.readdirSync(imagesDir);

    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `/${folder}/${file}`)
      .sort(); // Sort alphabetically for consistent order

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading images directory:', error);
    return NextResponse.json(
      { error: 'Failed to read images directory' },
      { status: 500 }
    );
  }
}