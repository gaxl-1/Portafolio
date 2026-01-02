import fs from "fs"
import path from "path"
import matter from "gray-matter"

type Metadata = {
    title: string
    publishedAt: string
    summary: string
    image?: string
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

/**
 * Lee y procesa un archivo MDX individual.
 *
 * @param {string} filePath - Ruta absoluta al archivo MDX.
 * @returns {object} Objeto con la metadata (frontmatter) y el contenido raw.
 */
function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8")
    return matter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        const { data, content } = readMDXFile(path.join(dir, file))
        const slug = path.basename(file, path.extname(file))

        return {
            metadata: data as Metadata,
            slug,
            content,
        }
    })
}

/**
 * Obtiene todos los posts del blog desde el directorio de contenido.
 *
 * Lee el directorio `content/blog`, procesa cada archivo MDX y extrae
 * su metadata (título, fecha, slug) y contenido.
 *
 * @returns {Array} Lista de objetos con metadata, slug y contenido de cada post.
 */
export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "content", "blog"))
}

/**
 * Formatea una fecha en string a un formato legible.
 *
 * @param {string} date - Fecha en formato string (YYYY-MM-DD).
 * @param {boolean} [includeRelative=false] - Si es true, añade tiempo relativo (ej: "hace 2 días").
 * @returns {string} Fecha formateada.
 */
export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date()
    if (!date.includes("T")) {
        date = `${date}T00:00:00`
    }
    const targetDate = new Date(date)

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    const daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = ""

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = "Today"
    }

    const fullDate = targetDate.toLocaleString("es-mx", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })

    if (!includeRelative) {
        return fullDate
    }

    return `${fullDate} (${formattedDate})`
}
