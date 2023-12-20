import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import { join } from "path";

export async function markdownToHtml(path) {
  const fullPath = join(process.cwd(), "content", path);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return contentHtml;
}
