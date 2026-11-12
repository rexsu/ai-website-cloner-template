import styles from "./bohrscience.module.css";

export function bs(...names: Array<string | false | null | undefined>) {
  return names
    .filter((name): name is string => Boolean(name))
    .map((name) => styles[name])
    .join(" ");
}
