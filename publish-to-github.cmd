cd portfolio
call publish-portfolio-to-github.cmd
cd ..

cd stocks
call publish-stocks-to-github.cmd
cd ..

echo %CMDCMDLINE%|find "%~f0">nul && PAUSE