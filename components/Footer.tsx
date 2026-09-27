import type { Dictionary } from "@/content/en";
import Barcode from "./Barcode";

/** The bottom of the receipt. */
export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>*** {t.footer.thanks} ***</p>
        <Barcode value="ahmed-abdalrahman" className="barcode" />
        <p>
          © {new Date().getFullYear()} · {t.footer.note}
        </p>
      </div>
    </footer>
  );
}
