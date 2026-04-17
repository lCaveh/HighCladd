const asset = (path: string): string => `${process.env.PUBLIC_URL ?? ''}${path}`;

export { asset };
