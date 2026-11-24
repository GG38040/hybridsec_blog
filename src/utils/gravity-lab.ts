export function planet(mass: number) {
  const radius = mass ** (1 / 3.7);
  return { radius, gravity: mass / radius ** 2, escape: 11.186 * Math.sqrt(mass / radius) };
}

export function equivalentBody(gravity: number, capacity: number) {
  const ratio = capacity / gravity;
  return { height: 6 * ratio, mass: 180 * ratio ** 3 };
}

export function relativeStress(gravity: number, size: number) {
  return gravity * size;
}
