// @description Open the branch
if (options.repos) {
	if (options.branches) {
		open(options.branches.html_url)
	} else {
		notify('Branch not found', 'error', 3000)
	}
} else {
	notify('Repository not found', 'error', 3000)
}
