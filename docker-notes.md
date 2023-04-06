Steps to install Docker.
	Procedure varies widely based on your OS.
	If you have Windows Home edition, check to see
	if it compatible at all. Find the latest requirements
	on Docker's website. You can try this link
	but it may be old by the time you read it: https://docs.docker.com/desktop/install/windows-install/#install-docker-desktop-on-windows
	Install procedure will also
	change from the time of this typing. Only 2 years
	prior, for Windows Home, it was to use the legacy Docker
	Toolbox app, which has since been deprecated.
Check operating system version topic.
	run winvr
Check virtualization.
	Hyper-v topic.
	Container topic. Virtualization topic.
	Task Manager -> Performance -> Virtualization enabled.
	Another requirement.
Example.
	file:///C:/Users/edhth/OneDrive/Documents/WebBackendDevI/Week3/Virtualization.PNG
Enable virtualization.
	https://support.bluestacks.com/hc/en-us/articles/360058102252-How-to-enable-Virtualization-VT-on-Windows-10-for-BlueStacks-5
Hyper-v vs virtualization.
	I was able to use Docker and virtualization on Windows 10
	Home, but apparently the Hyper-v manager app isn't available
	on home. With Docker, however, it doesn't seem to require
	the Hyper-v manager unless it somehow exists on my
	machine. Docker was clear about the requirement of Windows
	10 Home being sufficient for the Linux containers anyway,
	(though not for Windows or Mac containers)
	so you should definitely be able to get Docker running on
	Windows 10 Home.
	https://answers.microsoft.com/en-us/windows/forum/all/hyper-v-is-missing/191e7c79-2c95-4417-b877-f40f6f856108
Install WSL.
	Install a Linux distribution topic. Install Linux topic.
	Install Linux on Windows with WSL topic.
	WSL topic. Windows Subsystem for Linux topic.
	You can install Linux and run it within Windows
	with WSL (Windows Subsystem for Linux).
	Required for Windows Home users at the time of this
	typing, because only Linux containers are enabled in
	Docker for Windows Home edition.
Requirements.
	https://learn.microsoft.com/en-us/windows/wsl/install
Procedure.
	Run cmd or powershell with admin rights.
	wsl --install didn't work for me. I had to use the manual
	install steps. Apparently, "the kernel is not installed by
	this command, only Linux distros" from willeccles (https://github.com/microsoft/WSL/issues/7338).
Manual install steps.
	https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package
	On step 6, skip visiting the Microsoft store and
	install a distro from the command line.
Install command.
	wsl --install -d Ubuntu
Blind typing.
	Ubunto starts, you won't anything happen as you type
	your password. This is normal. Hit enter and it will
	ask you to type it again for confirmation.
Sudo topic.
	Super user do topic.
Close Ubunto.
	Close your Ubunto instance and restart your computer.
Can't install WSL.
	See links for troubleshooting.
	https://github.com/MicrosoftDocs/WSL/issues/1054
	https://github.com/microsoft/WSL/issues/7338
Install Docker.
	https://ammonshepherd.github.io/340br/phpmotors/views/docker-setup.html
Container.
	Docker is essentially a stripped-down VM that contains
	the server software, making a separate server running
	entirely separately from your own computer. Putting
	the server software into such a container enables you
	to use less resources (vs. a full-blown VM), and
	allows it to support more machines (it is easier
	to port the VM to more machines than the software
	that runs inside). XAMPP is more work to setup, but
	still one of the best options.
	Another advantage of Docker is that
	you can run any other server applications you
	want without interference. Useful since I'm also in
	an Introduction to Databases class, with MySQL Workbench
	already installed and running.
Docker Desktop starting.
	If you are stuck on Docker desktop starting, you won't
	be able to run your containers.
	The "docker network create traefikNetwork" command won't
	work and the error will say docker daemon probably isn't
	running.
	"error during connect: This error may indicate that the docker daemon is not running.: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/version": open //./pipe/docker_engine: The system cannot find the file specified."
	For me, the fix was to close my Ubunto instance
	and restart my computer, thanks to answer by olisteadman here: https://stackoverflow.com/questions/40459280/docker-cannot-start-on-windows
More links.
	To troubleshoot Docker Desktop starting.
	It can take quite some time to try all these
	suggestions. If you can't get Docker to finish starting,
	or get it installed at all, for time considerations you
	may need to move to XAMPP or get some paid technical
	support from Docker (last link).
	https://stackoverflow.com/questions/40459280/docker-cannot-start-on-windows
	https://stackoverflow.com/questions/71238673/docker-desktop-starting-forever-on-windows/71258405#71258405
	https://stackoverflow.com/questions/43041331/docker-forever-in-docker-is-starting-at-windows-task
	https://docs.docker.com/desktop/troubleshoot/overview/
	https://dev.to/ivanauliaa/when-my-docker-desktop-stuck-on-starting-state-nda#:~:text=After%20further%20investigation%2C%20it%20turns,WSL%20feature%20is%20on%2C%20etc.
Docker images.
	Find images for your containers.
	When you run a virtual machine, you need an image, for example
	running an emulator for a mobile phone.
	Docker containers are very lightweight VM's that don't emulate
	a full operating system, just the parts you need for the apps you
	are running inside. They too have images, which are just
	applications packaged in such a way they can be loaded into the
	the VM's (the containers).
	My class has a nice set of Docker images for a PMAMP.
Copy PMAMP repo.
	Copy this repo using one of the two methods in the
	copy repo topic.
	https://github.com/ammonshepherd/pmamp
Setup.
	Skip to Clone the Web Server files to see how to set it up.
	https://ammonshepherd.github.io/340br/phpmotors/views/docker-setup.html
Create Docker network.
	When you are about to type
	"docker network create traefikNetwork"
	for clarification I just wanted to add you should
	probably
	type the above command in VS Code terminal, in the same
	directory you have your image files (CSE340 in the tutorial).
Compose up command.
	Docker compose up topic.
	This command can take a long time when it first runs.
	I started at 1:05 PM. However, mine got stuck during
	the Buiding... phase at 3/5. There was no changes to
	the amount of bytes or anything, it was just
	hanging there.
Compose up stuck.
	I ended all the Docker processes using ctrl alt delete.
	I restarted Docker Desktop. When Docker Desktop finished
	starting its engine, then I tried compose up again and
	it worked. NOTE: it will look like it's stuck, but it's
	not. When it is finished, it retains control of the
	terminal, which is very useful for debugging, since it can
	tell you when a page is visited for example. You can also
	command the containers to stop through the container.
Basic Docker commands.
	Server start topic. Server stop topic. Basic Docker commands topic.
Run Docker topic.
	run Docker Desktop (engine needs to go from starting to running)
	docker network create traefikNetwork // run once to initialize project folder
	docker compose up (starts containers) // this is the repeatable run command
	docker compose up -d (runs it in background, frees up terminal)
	ctrl c (graceful stop when inside server's terminal. Like closing an app)
	docker compose down (completes stop. Like hitting shutdown)
	docker ps (test if they are running)
	http://lvh.me/ (navigate here)
	"To run your PHP code you will run the Docker containers which start the Apache and MySQL servers, then open your browser and go to http://lvh.me/phpmotors (or http://localhost/phpmotorsthen navigate to the desired file or location using the address bar in your browser."
	--Ammon Shepherd
Other Docker problems.
	Docker problems topic.
Docker ps problem.
	Docker is running ok now, but I have had some weird issues with VS code in following the docker instructions that you gave here https://ammonshepherd.github.io/340br/phpmotors/views/docker-setup.html
	Everything was ok up until I had to use this command. docker ps
	This command resulted in this result in the terminal CONTAINER ID IMAGE          COMMAND         CREATED     STATUS     PORTS        NAMES
	9dee313bf0ce docker/getting-started "/docker-entrypoint.…" 41 minutes ago Up 41 minutes 0.0.0.0:80->80/tcp musing_vaughan
	I ended docker and and restarted it to make sure that that wasn't the issue and this pursued.
	I then tried to continue thinking that maybe this wouldn't cause any problems. So I went to this command docker compose up.
	That resulted in this error in the terminal
	 docker compose up
	[+] Building 0.1s (2/2) FINISHED
	 => [internal] load build definitio 0.0s
	 => => transferring dockerfile: 2B 0.0s
	 => [internal] load .dockerignore  0.0s
	failed to solve: rpc error: code = Unknown desc = failed to solve with frontend dockerfile.v0: failed to read dockerfile: open /var/lib/docker/tmp/buildkit-mount3014888577/Dockerfile: no such file or directory
	And obviously when I went to the website it showed a different page entirely indicating that I did not have a working server.
	I tried restarting everything and even created a new folder which resulted in othe issues particularly when I ran this command docker network create traefikNetwork
	That resulted in the terminal saying that already existed which other commands prompted had more issues. I erased the folders and started from scratch which indicated a more severe error.
Vmmem problems.
	If CPU usage goes crazy high on vmmem, try restarting computer.
	See links for more solutions. Stopping Docker doesn't really
	help but you can try.
	Also helps to not have a lot of tabs on Firefox and
	messenging apps up (Teams, Slack, Discord)!!!
More info.
	https://windowsreport.com/vmmem-windows-10/
	https://forums.docker.com/t/stopping-docker-host-on-windows-using-task-manager-or-command-prompt/32613