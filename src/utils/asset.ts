const asset = (path: string): string => `${process.env.PUBLIC_URL?.replace(/\/$/, '') ?? ''}${path}`;

export { asset };
