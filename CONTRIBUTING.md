# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process
### Setting up your local environment
To get started, you will need to have git installed locally. Once you have git and are sure you have all of the necessary dependencies, it's time to create a fork.
Before getting started, it is recommended to configure git so that it knows who you are:
```bash
git config --global user.name "J. Random User"
git config --global user.email "j.random.user@example.com"
```

#### Step 1: Fork
Fork the project on GitHub and clone your fork locally.
```bash
git clone git@github.com:username/octicons-modular.git
cd octicons-modular
git remote add upstream https://github.com/hiendv/octicons-modular.git
git fetch upstream
```

#### Step 2: Branch
As a best practice to keep your development environment as organized as possible, create local branches to work within. These should also be created directly off of the master branch.
```bash
git checkout -b fix-something -t upstream/master
```

### The Process of Making Changes
#### Step 3: Code & Build
The vast majority of Pull Requests opened against the `hiendv/octicons-modular` repository includes changes to either the Javascript code contained in the `src` directory, the scripts contained in the `build` directory, the documentation in `README.md` & `docs` directory or tests within the `test` directory. Please do not modify auto-generated files since your changes will be destroyed when we run build scripts. Below are files which are auto-generated:
- `src/icons.js`
- `src/icons`

If you are modifying code, please be sure to run `npm run modularize` && `npm run lint` from time to time to ensure that the changes follow the code style guide. For an easier flow, you could run `npm run dev` for the development process which also contains linting, building and testing scripts.

When you are happy with your changes, run `npm run build` for the build.

#### Step 4: Commit
It is a recommended best practice to keep your changes as logically grouped as possible within individual commits. There is no limit to the number of commits any single Pull Request may have, and many contributors find it easier to review changes that are split across multiple commits.
```bash
git add my/changed/files
git commit
```

#### Step 5: Rebase
As a best practice, once you have committed your changes, it is a good idea to use `git rebase` (not git merge) to synchronize your work with the main repository.
```bash
git fetch upstream
git rebase upstream/master
```
This ensures that your working branch has the latest changes from `hiendv/octicons-modular` master.

#### Step 6: Test
Bug fixes and features should always come with tests. Looking at other tests to see how they should be structured can also help. The `test` directory within the `hiendv/octicons-modular` repository is kinda simple and straightforward. Before submitting your changes in a Pull Request, always run the full test suite with `npm test`.

#### Step 7: Push
Once you are sure your commits are ready to go, with passing tests and linting, begin the process of opening a Pull Request by pushing your working branch to your fork on GitHub.
```bash
git push origin my-branch
```

#### Step 8: Opening the Pull Request
Once opened, Pull Requests are usually reviewed within a few days.

#### Step 9: Discuss and update
You will probably get feedback or requests for changes to your Pull Request. This is a big part of the submission process so don't be discouraged! Some contributors may sign off on the Pull Request right away, others may have more detailed comments or feedback. This is a necessary part of the process in order to evaluate whether the changes are correct and necessary.

To make changes to an existing Pull Request, make the changes to your local branch, add a new commit with those changes, and push those to your fork. GitHub will automatically update the Pull Request.
```bash
git add my/changed/files
git commit
git push origin my-branch
```

It is also frequently necessary to synchronize your Pull Request with other changes that have landed in master by using `git rebase`:
```bash
git fetch --all
git rebase origin/master
git push --force-with-lease origin my-branch
```

If you happen to make a mistake in any of your commits, do not worry. You can amend the last commit (for example if you want to change the commit log).
```bash
$ git add any/changed/files
$ git commit --amend
$ git push --force-with-lease origin my-branch
```
Feel free to post a comment in the Pull Request to ping reviewers if you are awaiting an answer on something.
