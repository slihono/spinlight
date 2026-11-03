"""Synchronize the portfolio download with Seneve's reviewed general resume."""
import argparse
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = ROOT.parents[1] / "outputs/CV_et_Resumes/Seneve_Lihono_Resume_US_EN.pdf"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE,
                        help="Path to the reviewed general resume PDF")
    args = parser.parse_args()
    source = args.source.resolve()
    if not source.is_file() or not source.read_bytes().startswith(b"%PDF-"):
        parser.error("Provide a reviewed PDF with --source; no resume was changed.")
    output = ROOT / "assets/seneve-lihono-resume.pdf"
    if source != output.resolve():
        shutil.copyfile(source, output)
    print(output)


if __name__ == "__main__":
    main()
