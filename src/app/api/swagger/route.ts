import { NextResponse } from 'next/server';
import swaggerSpec from '@/app/swagger-config';

export async function GET() {
  return NextResponse.json(swaggerSpec);
} 