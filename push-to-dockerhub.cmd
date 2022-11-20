cd portfolio
call push-portfolio-to-dockerhub.cmd
cd ..

cd stocks
call push-stocks-to-dockerhub.cmd
cd ..

echo %CMDCMDLINE%|find "%~f0">nul && PAUSE