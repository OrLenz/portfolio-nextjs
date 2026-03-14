const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * Calculates duration between two YYYY-MM date strings
 * and returns a formatted period string.
 *
 * @param {string} startDate - "YYYY-MM" format
 * @param {string|null} endDate - "YYYY-MM" format or null for present
 * @returns {{ label: string, duration: string }}
 */
export function formatPeriod(startDate, endDate) {
	const [startYear, startMonth] = startDate.split('-').map(Number)
	const end = endDate ? endDate.split('-').map(Number) : [new Date().getFullYear(), new Date().getMonth() + 1]
	const [endYear, endMonth] = end

	const startLabel = `${MONTHS[startMonth - 1]} ${startYear}`
	const endLabel = endDate ? `${MONTHS[endMonth - 1]} ${endYear}` : 'Present'

	let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1
	const years = Math.floor(totalMonths / 12)
	const months = totalMonths % 12

	const parts = []
	if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
	if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
	const duration = parts.join(' ') || '1 mo'

	return {
		label: `${startLabel} - ${endLabel}`,
		duration,
	}
}
