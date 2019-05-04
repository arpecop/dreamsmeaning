workflow "New workflow" {
  resolves = [
    "Create an issue",
    "GitHub Action for Heroku",
  ]
  on = "schedule(*/1 * * * *)"
}

action "Create an issue" {
  uses = "JasonEtco/create-an-issue@306d0d8fece95b6492f5c74b8cb36e5fb5f9e1b5"
  runs = "ls"
}

action "GitHub Action for Heroku" {
  uses = "actions/heroku@466fea5e8253586a6df75b10e95447b0bfe383c1"
}
