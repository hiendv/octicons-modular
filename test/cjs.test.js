const octicons = require('../lib/main.common.js')

describe('commonjs bundle', () => {
  test('has alert', () => {
    expect(octicons.alert).toEqual(expect.objectContaining({
      name: 'alert',
      svg: expect.any(Function)
    }))
  })

  test('has zap', () => {
    expect(octicons.zap).toEqual(expect.objectContaining({
      name: 'zap',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-down', () => {
    expect(octicons.arrowDown).toEqual(expect.objectContaining({
      name: 'arrow-down',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-left', () => {
    expect(octicons.arrowLeft).toEqual(expect.objectContaining({
      name: 'arrow-left',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-right', () => {
    expect(octicons.arrowRight).toEqual(expect.objectContaining({
      name: 'arrow-right',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-up', () => {
    expect(octicons.arrowUp).toEqual(expect.objectContaining({
      name: 'arrow-up',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-small-down', () => {
    expect(octicons.arrowSmallDown).toEqual(expect.objectContaining({
      name: 'arrow-small-down',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-small-left', () => {
    expect(octicons.arrowSmallLeft).toEqual(expect.objectContaining({
      name: 'arrow-small-left',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-small-right', () => {
    expect(octicons.arrowSmallRight).toEqual(expect.objectContaining({
      name: 'arrow-small-right',
      svg: expect.any(Function)
    }))
  })

  test('has arrow-small-up', () => {
    expect(octicons.arrowSmallUp).toEqual(expect.objectContaining({
      name: 'arrow-small-up',
      svg: expect.any(Function)
    }))
  })

  test('has beaker', () => {
    expect(octicons.beaker).toEqual(expect.objectContaining({
      name: 'beaker',
      svg: expect.any(Function)
    }))
  })

  test('has bell', () => {
    expect(octicons.bell).toEqual(expect.objectContaining({
      name: 'bell',
      svg: expect.any(Function)
    }))
  })

  test('has bold', () => {
    expect(octicons.bold).toEqual(expect.objectContaining({
      name: 'bold',
      svg: expect.any(Function)
    }))
  })

  test('has book', () => {
    expect(octicons.book).toEqual(expect.objectContaining({
      name: 'book',
      svg: expect.any(Function)
    }))
  })

  test('has bookmark', () => {
    expect(octicons.bookmark).toEqual(expect.objectContaining({
      name: 'bookmark',
      svg: expect.any(Function)
    }))
  })

  test('has briefcase', () => {
    expect(octicons.briefcase).toEqual(expect.objectContaining({
      name: 'briefcase',
      svg: expect.any(Function)
    }))
  })

  test('has broadcast', () => {
    expect(octicons.broadcast).toEqual(expect.objectContaining({
      name: 'broadcast',
      svg: expect.any(Function)
    }))
  })

  test('has browser', () => {
    expect(octicons.browser).toEqual(expect.objectContaining({
      name: 'browser',
      svg: expect.any(Function)
    }))
  })

  test('has bug', () => {
    expect(octicons.bug).toEqual(expect.objectContaining({
      name: 'bug',
      svg: expect.any(Function)
    }))
  })

  test('has calendar', () => {
    expect(octicons.calendar).toEqual(expect.objectContaining({
      name: 'calendar',
      svg: expect.any(Function)
    }))
  })

  test('has check', () => {
    expect(octicons.check).toEqual(expect.objectContaining({
      name: 'check',
      svg: expect.any(Function)
    }))
  })

  test('has checklist', () => {
    expect(octicons.checklist).toEqual(expect.objectContaining({
      name: 'checklist',
      svg: expect.any(Function)
    }))
  })

  test('has chevron-down', () => {
    expect(octicons.chevronDown).toEqual(expect.objectContaining({
      name: 'chevron-down',
      svg: expect.any(Function)
    }))
  })

  test('has chevron-left', () => {
    expect(octicons.chevronLeft).toEqual(expect.objectContaining({
      name: 'chevron-left',
      svg: expect.any(Function)
    }))
  })

  test('has chevron-right', () => {
    expect(octicons.chevronRight).toEqual(expect.objectContaining({
      name: 'chevron-right',
      svg: expect.any(Function)
    }))
  })

  test('has chevron-up', () => {
    expect(octicons.chevronUp).toEqual(expect.objectContaining({
      name: 'chevron-up',
      svg: expect.any(Function)
    }))
  })

  test('has circle-slash', () => {
    expect(octicons.circleSlash).toEqual(expect.objectContaining({
      name: 'circle-slash',
      svg: expect.any(Function)
    }))
  })

  test('has circuit-board', () => {
    expect(octicons.circuitBoard).toEqual(expect.objectContaining({
      name: 'circuit-board',
      svg: expect.any(Function)
    }))
  })

  test('has clippy', () => {
    expect(octicons.clippy).toEqual(expect.objectContaining({
      name: 'clippy',
      svg: expect.any(Function)
    }))
  })

  test('has clock', () => {
    expect(octicons.clock).toEqual(expect.objectContaining({
      name: 'clock',
      svg: expect.any(Function)
    }))
  })

  test('has cloud-download', () => {
    expect(octicons.cloudDownload).toEqual(expect.objectContaining({
      name: 'cloud-download',
      svg: expect.any(Function)
    }))
  })

  test('has cloud-upload', () => {
    expect(octicons.cloudUpload).toEqual(expect.objectContaining({
      name: 'cloud-upload',
      svg: expect.any(Function)
    }))
  })

  test('has code', () => {
    expect(octicons.code).toEqual(expect.objectContaining({
      name: 'code',
      svg: expect.any(Function)
    }))
  })

  test('has comment-discussion', () => {
    expect(octicons.commentDiscussion).toEqual(expect.objectContaining({
      name: 'comment-discussion',
      svg: expect.any(Function)
    }))
  })

  test('has comment', () => {
    expect(octicons.comment).toEqual(expect.objectContaining({
      name: 'comment',
      svg: expect.any(Function)
    }))
  })

  test('has credit-card', () => {
    expect(octicons.creditCard).toEqual(expect.objectContaining({
      name: 'credit-card',
      svg: expect.any(Function)
    }))
  })

  test('has dash', () => {
    expect(octicons.dash).toEqual(expect.objectContaining({
      name: 'dash',
      svg: expect.any(Function)
    }))
  })

  test('has dashboard', () => {
    expect(octicons.dashboard).toEqual(expect.objectContaining({
      name: 'dashboard',
      svg: expect.any(Function)
    }))
  })

  test('has database', () => {
    expect(octicons.database).toEqual(expect.objectContaining({
      name: 'database',
      svg: expect.any(Function)
    }))
  })

  test('has desktop-download', () => {
    expect(octicons.desktopDownload).toEqual(expect.objectContaining({
      name: 'desktop-download',
      svg: expect.any(Function)
    }))
  })

  test('has device-camera-video', () => {
    expect(octicons.deviceCameraVideo).toEqual(expect.objectContaining({
      name: 'device-camera-video',
      svg: expect.any(Function)
    }))
  })

  test('has device-camera', () => {
    expect(octicons.deviceCamera).toEqual(expect.objectContaining({
      name: 'device-camera',
      svg: expect.any(Function)
    }))
  })

  test('has device-desktop', () => {
    expect(octicons.deviceDesktop).toEqual(expect.objectContaining({
      name: 'device-desktop',
      svg: expect.any(Function)
    }))
  })

  test('has device-mobile', () => {
    expect(octicons.deviceMobile).toEqual(expect.objectContaining({
      name: 'device-mobile',
      svg: expect.any(Function)
    }))
  })

  test('has diff-added', () => {
    expect(octicons.diffAdded).toEqual(expect.objectContaining({
      name: 'diff-added',
      svg: expect.any(Function)
    }))
  })

  test('has diff-ignored', () => {
    expect(octicons.diffIgnored).toEqual(expect.objectContaining({
      name: 'diff-ignored',
      svg: expect.any(Function)
    }))
  })

  test('has diff-modified', () => {
    expect(octicons.diffModified).toEqual(expect.objectContaining({
      name: 'diff-modified',
      svg: expect.any(Function)
    }))
  })

  test('has diff-removed', () => {
    expect(octicons.diffRemoved).toEqual(expect.objectContaining({
      name: 'diff-removed',
      svg: expect.any(Function)
    }))
  })

  test('has diff-renamed', () => {
    expect(octicons.diffRenamed).toEqual(expect.objectContaining({
      name: 'diff-renamed',
      svg: expect.any(Function)
    }))
  })

  test('has diff', () => {
    expect(octicons.diff).toEqual(expect.objectContaining({
      name: 'diff',
      svg: expect.any(Function)
    }))
  })

  test('has ellipsis', () => {
    expect(octicons.ellipsis).toEqual(expect.objectContaining({
      name: 'ellipsis',
      svg: expect.any(Function)
    }))
  })

  test('has eye', () => {
    expect(octicons.eye).toEqual(expect.objectContaining({
      name: 'eye',
      svg: expect.any(Function)
    }))
  })

  test('has file-binary', () => {
    expect(octicons.fileBinary).toEqual(expect.objectContaining({
      name: 'file-binary',
      svg: expect.any(Function)
    }))
  })

  test('has file-code', () => {
    expect(octicons.fileCode).toEqual(expect.objectContaining({
      name: 'file-code',
      svg: expect.any(Function)
    }))
  })

  test('has file-directory', () => {
    expect(octicons.fileDirectory).toEqual(expect.objectContaining({
      name: 'file-directory',
      svg: expect.any(Function)
    }))
  })

  test('has file-media', () => {
    expect(octicons.fileMedia).toEqual(expect.objectContaining({
      name: 'file-media',
      svg: expect.any(Function)
    }))
  })

  test('has file-pdf', () => {
    expect(octicons.filePdf).toEqual(expect.objectContaining({
      name: 'file-pdf',
      svg: expect.any(Function)
    }))
  })

  test('has file-submodule', () => {
    expect(octicons.fileSubmodule).toEqual(expect.objectContaining({
      name: 'file-submodule',
      svg: expect.any(Function)
    }))
  })

  test('has file-symlink-directory', () => {
    expect(octicons.fileSymlinkDirectory).toEqual(expect.objectContaining({
      name: 'file-symlink-directory',
      svg: expect.any(Function)
    }))
  })

  test('has file-symlink-file', () => {
    expect(octicons.fileSymlinkFile).toEqual(expect.objectContaining({
      name: 'file-symlink-file',
      svg: expect.any(Function)
    }))
  })

  test('has file-text', () => {
    expect(octicons.fileText).toEqual(expect.objectContaining({
      name: 'file-text',
      svg: expect.any(Function)
    }))
  })

  test('has file-zip', () => {
    expect(octicons.fileZip).toEqual(expect.objectContaining({
      name: 'file-zip',
      svg: expect.any(Function)
    }))
  })

  test('has file', () => {
    expect(octicons.file).toEqual(expect.objectContaining({
      name: 'file',
      svg: expect.any(Function)
    }))
  })

  test('has flame', () => {
    expect(octicons.flame).toEqual(expect.objectContaining({
      name: 'flame',
      svg: expect.any(Function)
    }))
  })

  test('has fold', () => {
    expect(octicons.fold).toEqual(expect.objectContaining({
      name: 'fold',
      svg: expect.any(Function)
    }))
  })

  test('has gear', () => {
    expect(octicons.gear).toEqual(expect.objectContaining({
      name: 'gear',
      svg: expect.any(Function)
    }))
  })

  test('has gift', () => {
    expect(octicons.gift).toEqual(expect.objectContaining({
      name: 'gift',
      svg: expect.any(Function)
    }))
  })

  test('has gist-secret', () => {
    expect(octicons.gistSecret).toEqual(expect.objectContaining({
      name: 'gist-secret',
      svg: expect.any(Function)
    }))
  })

  test('has gist', () => {
    expect(octicons.gist).toEqual(expect.objectContaining({
      name: 'gist',
      svg: expect.any(Function)
    }))
  })

  test('has git-branch', () => {
    expect(octicons.gitBranch).toEqual(expect.objectContaining({
      name: 'git-branch',
      svg: expect.any(Function)
    }))
  })

  test('has git-commit', () => {
    expect(octicons.gitCommit).toEqual(expect.objectContaining({
      name: 'git-commit',
      svg: expect.any(Function)
    }))
  })

  test('has git-compare', () => {
    expect(octicons.gitCompare).toEqual(expect.objectContaining({
      name: 'git-compare',
      svg: expect.any(Function)
    }))
  })

  test('has git-merge', () => {
    expect(octicons.gitMerge).toEqual(expect.objectContaining({
      name: 'git-merge',
      svg: expect.any(Function)
    }))
  })

  test('has git-pull-request', () => {
    expect(octicons.gitPullRequest).toEqual(expect.objectContaining({
      name: 'git-pull-request',
      svg: expect.any(Function)
    }))
  })

  test('has globe', () => {
    expect(octicons.globe).toEqual(expect.objectContaining({
      name: 'globe',
      svg: expect.any(Function)
    }))
  })

  test('has grabber', () => {
    expect(octicons.grabber).toEqual(expect.objectContaining({
      name: 'grabber',
      svg: expect.any(Function)
    }))
  })

  test('has graph', () => {
    expect(octicons.graph).toEqual(expect.objectContaining({
      name: 'graph',
      svg: expect.any(Function)
    }))
  })

  test('has heart', () => {
    expect(octicons.heart).toEqual(expect.objectContaining({
      name: 'heart',
      svg: expect.any(Function)
    }))
  })

  test('has history', () => {
    expect(octicons.history).toEqual(expect.objectContaining({
      name: 'history',
      svg: expect.any(Function)
    }))
  })

  test('has home', () => {
    expect(octicons.home).toEqual(expect.objectContaining({
      name: 'home',
      svg: expect.any(Function)
    }))
  })

  test('has horizontal-rule', () => {
    expect(octicons.horizontalRule).toEqual(expect.objectContaining({
      name: 'horizontal-rule',
      svg: expect.any(Function)
    }))
  })

  test('has hubot', () => {
    expect(octicons.hubot).toEqual(expect.objectContaining({
      name: 'hubot',
      svg: expect.any(Function)
    }))
  })

  test('has inbox', () => {
    expect(octicons.inbox).toEqual(expect.objectContaining({
      name: 'inbox',
      svg: expect.any(Function)
    }))
  })

  test('has info', () => {
    expect(octicons.info).toEqual(expect.objectContaining({
      name: 'info',
      svg: expect.any(Function)
    }))
  })

  test('has issue-closed', () => {
    expect(octicons.issueClosed).toEqual(expect.objectContaining({
      name: 'issue-closed',
      svg: expect.any(Function)
    }))
  })

  test('has issue-opened', () => {
    expect(octicons.issueOpened).toEqual(expect.objectContaining({
      name: 'issue-opened',
      svg: expect.any(Function)
    }))
  })

  test('has issue-reopened', () => {
    expect(octicons.issueReopened).toEqual(expect.objectContaining({
      name: 'issue-reopened',
      svg: expect.any(Function)
    }))
  })

  test('has italic', () => {
    expect(octicons.italic).toEqual(expect.objectContaining({
      name: 'italic',
      svg: expect.any(Function)
    }))
  })

  test('has jersey', () => {
    expect(octicons.jersey).toEqual(expect.objectContaining({
      name: 'jersey',
      svg: expect.any(Function)
    }))
  })

  test('has kebab-horizontal', () => {
    expect(octicons.kebabHorizontal).toEqual(expect.objectContaining({
      name: 'kebab-horizontal',
      svg: expect.any(Function)
    }))
  })

  test('has kebab-vertical', () => {
    expect(octicons.kebabVertical).toEqual(expect.objectContaining({
      name: 'kebab-vertical',
      svg: expect.any(Function)
    }))
  })

  test('has key', () => {
    expect(octicons.key).toEqual(expect.objectContaining({
      name: 'key',
      svg: expect.any(Function)
    }))
  })

  test('has keyboard', () => {
    expect(octicons.keyboard).toEqual(expect.objectContaining({
      name: 'keyboard',
      svg: expect.any(Function)
    }))
  })

  test('has law', () => {
    expect(octicons.law).toEqual(expect.objectContaining({
      name: 'law',
      svg: expect.any(Function)
    }))
  })

  test('has light-bulb', () => {
    expect(octicons.lightBulb).toEqual(expect.objectContaining({
      name: 'light-bulb',
      svg: expect.any(Function)
    }))
  })

  test('has link-external', () => {
    expect(octicons.linkExternal).toEqual(expect.objectContaining({
      name: 'link-external',
      svg: expect.any(Function)
    }))
  })

  test('has link', () => {
    expect(octicons.link).toEqual(expect.objectContaining({
      name: 'link',
      svg: expect.any(Function)
    }))
  })

  test('has list-ordered', () => {
    expect(octicons.listOrdered).toEqual(expect.objectContaining({
      name: 'list-ordered',
      svg: expect.any(Function)
    }))
  })

  test('has list-unordered', () => {
    expect(octicons.listUnordered).toEqual(expect.objectContaining({
      name: 'list-unordered',
      svg: expect.any(Function)
    }))
  })

  test('has location', () => {
    expect(octicons.location).toEqual(expect.objectContaining({
      name: 'location',
      svg: expect.any(Function)
    }))
  })

  test('has lock', () => {
    expect(octicons.lock).toEqual(expect.objectContaining({
      name: 'lock',
      svg: expect.any(Function)
    }))
  })

  test('has logo-gist', () => {
    expect(octicons.logoGist).toEqual(expect.objectContaining({
      name: 'logo-gist',
      svg: expect.any(Function)
    }))
  })

  test('has logo-github', () => {
    expect(octicons.logoGithub).toEqual(expect.objectContaining({
      name: 'logo-github',
      svg: expect.any(Function)
    }))
  })

  test('has mail-read', () => {
    expect(octicons.mailRead).toEqual(expect.objectContaining({
      name: 'mail-read',
      svg: expect.any(Function)
    }))
  })

  test('has mail-reply', () => {
    expect(octicons.mailReply).toEqual(expect.objectContaining({
      name: 'mail-reply',
      svg: expect.any(Function)
    }))
  })

  test('has mail', () => {
    expect(octicons.mail).toEqual(expect.objectContaining({
      name: 'mail',
      svg: expect.any(Function)
    }))
  })

  test('has mark-github', () => {
    expect(octicons.markGithub).toEqual(expect.objectContaining({
      name: 'mark-github',
      svg: expect.any(Function)
    }))
  })

  test('has markdown', () => {
    expect(octicons.markdown).toEqual(expect.objectContaining({
      name: 'markdown',
      svg: expect.any(Function)
    }))
  })

  test('has megaphone', () => {
    expect(octicons.megaphone).toEqual(expect.objectContaining({
      name: 'megaphone',
      svg: expect.any(Function)
    }))
  })

  test('has mention', () => {
    expect(octicons.mention).toEqual(expect.objectContaining({
      name: 'mention',
      svg: expect.any(Function)
    }))
  })

  test('has milestone', () => {
    expect(octicons.milestone).toEqual(expect.objectContaining({
      name: 'milestone',
      svg: expect.any(Function)
    }))
  })

  test('has mirror', () => {
    expect(octicons.mirror).toEqual(expect.objectContaining({
      name: 'mirror',
      svg: expect.any(Function)
    }))
  })

  test('has mortar-board', () => {
    expect(octicons.mortarBoard).toEqual(expect.objectContaining({
      name: 'mortar-board',
      svg: expect.any(Function)
    }))
  })

  test('has mute', () => {
    expect(octicons.mute).toEqual(expect.objectContaining({
      name: 'mute',
      svg: expect.any(Function)
    }))
  })

  test('has no-newline', () => {
    expect(octicons.noNewline).toEqual(expect.objectContaining({
      name: 'no-newline',
      svg: expect.any(Function)
    }))
  })

  test('has note', () => {
    expect(octicons.note).toEqual(expect.objectContaining({
      name: 'note',
      svg: expect.any(Function)
    }))
  })

  test('has octoface', () => {
    expect(octicons.octoface).toEqual(expect.objectContaining({
      name: 'octoface',
      svg: expect.any(Function)
    }))
  })

  test('has organization', () => {
    expect(octicons.organization).toEqual(expect.objectContaining({
      name: 'organization',
      svg: expect.any(Function)
    }))
  })

  test('has package', () => {
    expect(octicons.package).toEqual(expect.objectContaining({
      name: 'package',
      svg: expect.any(Function)
    }))
  })

  test('has paintcan', () => {
    expect(octicons.paintcan).toEqual(expect.objectContaining({
      name: 'paintcan',
      svg: expect.any(Function)
    }))
  })

  test('has pencil', () => {
    expect(octicons.pencil).toEqual(expect.objectContaining({
      name: 'pencil',
      svg: expect.any(Function)
    }))
  })

  test('has person', () => {
    expect(octicons.person).toEqual(expect.objectContaining({
      name: 'person',
      svg: expect.any(Function)
    }))
  })

  test('has pin', () => {
    expect(octicons.pin).toEqual(expect.objectContaining({
      name: 'pin',
      svg: expect.any(Function)
    }))
  })

  test('has plug', () => {
    expect(octicons.plug).toEqual(expect.objectContaining({
      name: 'plug',
      svg: expect.any(Function)
    }))
  })

  test('has plus-small', () => {
    expect(octicons.plusSmall).toEqual(expect.objectContaining({
      name: 'plus-small',
      svg: expect.any(Function)
    }))
  })

  test('has plus', () => {
    expect(octicons.plus).toEqual(expect.objectContaining({
      name: 'plus',
      svg: expect.any(Function)
    }))
  })

  test('has primitive-dot', () => {
    expect(octicons.primitiveDot).toEqual(expect.objectContaining({
      name: 'primitive-dot',
      svg: expect.any(Function)
    }))
  })

  test('has primitive-square', () => {
    expect(octicons.primitiveSquare).toEqual(expect.objectContaining({
      name: 'primitive-square',
      svg: expect.any(Function)
    }))
  })

  test('has project', () => {
    expect(octicons.project).toEqual(expect.objectContaining({
      name: 'project',
      svg: expect.any(Function)
    }))
  })

  test('has pulse', () => {
    expect(octicons.pulse).toEqual(expect.objectContaining({
      name: 'pulse',
      svg: expect.any(Function)
    }))
  })

  test('has question', () => {
    expect(octicons.question).toEqual(expect.objectContaining({
      name: 'question',
      svg: expect.any(Function)
    }))
  })

  test('has quote', () => {
    expect(octicons.quote).toEqual(expect.objectContaining({
      name: 'quote',
      svg: expect.any(Function)
    }))
  })

  test('has radio-tower', () => {
    expect(octicons.radioTower).toEqual(expect.objectContaining({
      name: 'radio-tower',
      svg: expect.any(Function)
    }))
  })

  test('has reply', () => {
    expect(octicons.reply).toEqual(expect.objectContaining({
      name: 'reply',
      svg: expect.any(Function)
    }))
  })

  test('has repo-clone', () => {
    expect(octicons.repoClone).toEqual(expect.objectContaining({
      name: 'repo-clone',
      svg: expect.any(Function)
    }))
  })

  test('has repo-force-push', () => {
    expect(octicons.repoForcePush).toEqual(expect.objectContaining({
      name: 'repo-force-push',
      svg: expect.any(Function)
    }))
  })

  test('has repo-forked', () => {
    expect(octicons.repoForked).toEqual(expect.objectContaining({
      name: 'repo-forked',
      svg: expect.any(Function)
    }))
  })

  test('has repo-pull', () => {
    expect(octicons.repoPull).toEqual(expect.objectContaining({
      name: 'repo-pull',
      svg: expect.any(Function)
    }))
  })

  test('has repo-push', () => {
    expect(octicons.repoPush).toEqual(expect.objectContaining({
      name: 'repo-push',
      svg: expect.any(Function)
    }))
  })

  test('has repo', () => {
    expect(octicons.repo).toEqual(expect.objectContaining({
      name: 'repo',
      svg: expect.any(Function)
    }))
  })

  test('has rocket', () => {
    expect(octicons.rocket).toEqual(expect.objectContaining({
      name: 'rocket',
      svg: expect.any(Function)
    }))
  })

  test('has rss', () => {
    expect(octicons.rss).toEqual(expect.objectContaining({
      name: 'rss',
      svg: expect.any(Function)
    }))
  })

  test('has ruby', () => {
    expect(octicons.ruby).toEqual(expect.objectContaining({
      name: 'ruby',
      svg: expect.any(Function)
    }))
  })

  test('has screen-full', () => {
    expect(octicons.screenFull).toEqual(expect.objectContaining({
      name: 'screen-full',
      svg: expect.any(Function)
    }))
  })

  test('has screen-normal', () => {
    expect(octicons.screenNormal).toEqual(expect.objectContaining({
      name: 'screen-normal',
      svg: expect.any(Function)
    }))
  })

  test('has search', () => {
    expect(octicons.search).toEqual(expect.objectContaining({
      name: 'search',
      svg: expect.any(Function)
    }))
  })

  test('has server', () => {
    expect(octicons.server).toEqual(expect.objectContaining({
      name: 'server',
      svg: expect.any(Function)
    }))
  })

  test('has settings', () => {
    expect(octicons.settings).toEqual(expect.objectContaining({
      name: 'settings',
      svg: expect.any(Function)
    }))
  })

  test('has shield', () => {
    expect(octicons.shield).toEqual(expect.objectContaining({
      name: 'shield',
      svg: expect.any(Function)
    }))
  })

  test('has sign-in', () => {
    expect(octicons.signIn).toEqual(expect.objectContaining({
      name: 'sign-in',
      svg: expect.any(Function)
    }))
  })

  test('has sign-out', () => {
    expect(octicons.signOut).toEqual(expect.objectContaining({
      name: 'sign-out',
      svg: expect.any(Function)
    }))
  })

  test('has smiley', () => {
    expect(octicons.smiley).toEqual(expect.objectContaining({
      name: 'smiley',
      svg: expect.any(Function)
    }))
  })

  test('has squirrel', () => {
    expect(octicons.squirrel).toEqual(expect.objectContaining({
      name: 'squirrel',
      svg: expect.any(Function)
    }))
  })

  test('has star', () => {
    expect(octicons.star).toEqual(expect.objectContaining({
      name: 'star',
      svg: expect.any(Function)
    }))
  })

  test('has stop', () => {
    expect(octicons.stop).toEqual(expect.objectContaining({
      name: 'stop',
      svg: expect.any(Function)
    }))
  })

  test('has sync', () => {
    expect(octicons.sync).toEqual(expect.objectContaining({
      name: 'sync',
      svg: expect.any(Function)
    }))
  })

  test('has tag', () => {
    expect(octicons.tag).toEqual(expect.objectContaining({
      name: 'tag',
      svg: expect.any(Function)
    }))
  })

  test('has tasklist', () => {
    expect(octicons.tasklist).toEqual(expect.objectContaining({
      name: 'tasklist',
      svg: expect.any(Function)
    }))
  })

  test('has telescope', () => {
    expect(octicons.telescope).toEqual(expect.objectContaining({
      name: 'telescope',
      svg: expect.any(Function)
    }))
  })

  test('has terminal', () => {
    expect(octicons.terminal).toEqual(expect.objectContaining({
      name: 'terminal',
      svg: expect.any(Function)
    }))
  })

  test('has text-size', () => {
    expect(octicons.textSize).toEqual(expect.objectContaining({
      name: 'text-size',
      svg: expect.any(Function)
    }))
  })

  test('has three-bars', () => {
    expect(octicons.threeBars).toEqual(expect.objectContaining({
      name: 'three-bars',
      svg: expect.any(Function)
    }))
  })

  test('has thumbsdown', () => {
    expect(octicons.thumbsdown).toEqual(expect.objectContaining({
      name: 'thumbsdown',
      svg: expect.any(Function)
    }))
  })

  test('has thumbsup', () => {
    expect(octicons.thumbsup).toEqual(expect.objectContaining({
      name: 'thumbsup',
      svg: expect.any(Function)
    }))
  })

  test('has tools', () => {
    expect(octicons.tools).toEqual(expect.objectContaining({
      name: 'tools',
      svg: expect.any(Function)
    }))
  })

  test('has trashcan', () => {
    expect(octicons.trashcan).toEqual(expect.objectContaining({
      name: 'trashcan',
      svg: expect.any(Function)
    }))
  })

  test('has triangle-down', () => {
    expect(octicons.triangleDown).toEqual(expect.objectContaining({
      name: 'triangle-down',
      svg: expect.any(Function)
    }))
  })

  test('has triangle-left', () => {
    expect(octicons.triangleLeft).toEqual(expect.objectContaining({
      name: 'triangle-left',
      svg: expect.any(Function)
    }))
  })

  test('has triangle-right', () => {
    expect(octicons.triangleRight).toEqual(expect.objectContaining({
      name: 'triangle-right',
      svg: expect.any(Function)
    }))
  })

  test('has triangle-up', () => {
    expect(octicons.triangleUp).toEqual(expect.objectContaining({
      name: 'triangle-up',
      svg: expect.any(Function)
    }))
  })

  test('has unfold', () => {
    expect(octicons.unfold).toEqual(expect.objectContaining({
      name: 'unfold',
      svg: expect.any(Function)
    }))
  })

  test('has unmute', () => {
    expect(octicons.unmute).toEqual(expect.objectContaining({
      name: 'unmute',
      svg: expect.any(Function)
    }))
  })

  test('has unverified', () => {
    expect(octicons.unverified).toEqual(expect.objectContaining({
      name: 'unverified',
      svg: expect.any(Function)
    }))
  })

  test('has verified', () => {
    expect(octicons.verified).toEqual(expect.objectContaining({
      name: 'verified',
      svg: expect.any(Function)
    }))
  })

  test('has versions', () => {
    expect(octicons.versions).toEqual(expect.objectContaining({
      name: 'versions',
      svg: expect.any(Function)
    }))
  })

  test('has watch', () => {
    expect(octicons.watch).toEqual(expect.objectContaining({
      name: 'watch',
      svg: expect.any(Function)
    }))
  })

  test('has x', () => {
    expect(octicons.x).toEqual(expect.objectContaining({
      name: 'x',
      svg: expect.any(Function)
    }))
  })
})
